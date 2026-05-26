import AppKit
import Foundation
import PDFKit
import Vision

struct OCRPage: Encodable {
    let page: Int
    let text: String
    let candidates: [String]
}

struct OCROutput: Encodable {
    let source: String
    let scale: Double
    let pageCount: Int
    let pages: [OCRPage]
}

func fail(_ message: String) -> Never {
    FileHandle.standardError.write((message + "\n").data(using: .utf8)!)
    exit(1)
}

func parsePages(_ raw: String?, pageCount: Int) -> [Int] {
    guard let raw, !raw.isEmpty else {
        return Array(1...pageCount)
    }
    var pages = Set<Int>()
    for part in raw.split(separator: ",") {
        if part.contains("-") {
            let bounds = part.split(separator: "-", maxSplits: 1).compactMap { Int($0) }
            if bounds.count == 2 {
                for page in max(1, bounds[0])...min(pageCount, bounds[1]) {
                    pages.insert(page)
                }
            }
        } else if let page = Int(part), page >= 1, page <= pageCount {
            pages.insert(page)
        }
    }
    return pages.sorted()
}

let args = CommandLine.arguments
guard args.count >= 3 else {
    fail("Usage: swift tools/vision_pdf_ocr.swift <input.pdf> <output.json> [--pages 1-3,8] [--scale 3.0]")
}

let input = URL(fileURLWithPath: args[1])
let output = URL(fileURLWithPath: args[2])
var pageSpec: String?
var scale = 3.0
var languages = ["en-US"]

var index = 3
while index < args.count {
    switch args[index] {
    case "--pages":
        index += 1
        if index < args.count { pageSpec = args[index] }
    case "--scale":
        index += 1
        if index < args.count, let parsed = Double(args[index]) { scale = parsed }
    case "--languages":
        index += 1
        if index < args.count {
            languages = args[index].split(separator: ",").map { String($0) }.filter { !$0.isEmpty }
        }
    default:
        break
    }
    index += 1
}

guard let document = PDFDocument(url: input) else {
    fail("Unable to open PDF: \(input.path)")
}

let pageCount = document.pageCount
let pagesToRead = parsePages(pageSpec, pageCount: pageCount)
var ocrPages: [OCRPage] = []

for pageNumber in pagesToRead {
    autoreleasepool {
        guard let page = document.page(at: pageNumber - 1) else { return }
        let bounds = page.bounds(for: .mediaBox)
        let targetSize = NSSize(width: bounds.width * scale, height: bounds.height * scale)
        let image = page.thumbnail(of: targetSize, for: .mediaBox)
        var rect = NSRect(origin: .zero, size: image.size)
        guard let cgImage = image.cgImage(forProposedRect: &rect, context: nil, hints: nil) else {
            ocrPages.append(OCRPage(page: pageNumber, text: "", candidates: []))
            return
        }

        var recognized: [String] = []
        let request = VNRecognizeTextRequest { request, error in
            if let error {
                let nsError = error as NSError
                recognized.append("OCR_ERROR: \(nsError.domain) \(nsError.code): \(nsError.localizedDescription)")
                return
            }
            guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
            for observation in observations {
                if let candidate = observation.topCandidates(1).first {
                    recognized.append(candidate.string)
                }
            }
        }
        request.recognitionLevel = .accurate
        request.usesLanguageCorrection = true
        if !languages.isEmpty {
            request.recognitionLanguages = languages
        }

        let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
        do {
            try handler.perform([request])
        } catch {
            let nsError = error as NSError
            recognized.append("OCR_ERROR: \(nsError.domain) \(nsError.code): \(nsError.localizedDescription)")
        }
        ocrPages.append(
            OCRPage(
                page: pageNumber,
                text: recognized.joined(separator: "\n"),
                candidates: recognized
            )
        )
    }
}

let result = OCROutput(
    source: input.path,
    scale: scale,
    pageCount: pageCount,
    pages: ocrPages.sorted { $0.page < $1.page }
)
let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys, .withoutEscapingSlashes]
let data = try encoder.encode(result)
try data.write(to: output)
print("Wrote \(output.path) with \(ocrPages.count) OCR pages")
