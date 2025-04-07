import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function StrategicPlanning() {
  const [showPDF, setShowPDF] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="content">
      <h2>Strategic Planning and Leadership</h2>
      <p>
        This paper explores the role of leadership in strategic planning, including five key leadership tasks:
        understanding the context, understanding people (including self), championing the process,
        facilitating the process, and using dialogue.
      </p>

      <button onClick={() => setShowPDF(true)} className="download-button">
        View Paper
      </button>

      {showPDF && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setShowPDF(false)} className="close-button">✖</button>
            <Document
              file="/StrategicPlanning.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                width={window.innerWidth > 768 ? 800 : 300}
              />
            </Document>

            <div className="carousel-controls" style={{ marginTop: "1rem" }}>
              <button
                onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                disabled={pageNumber <= 1}
              >
                Previous
              </button>
              <span>
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
                disabled={pageNumber >= numPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
