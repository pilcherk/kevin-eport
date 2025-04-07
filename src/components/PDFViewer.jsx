// 📁 src/components/PDFViewer.jsx
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../App.css"; // or your global styles path
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ file, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={window.innerWidth > 768 ? 800 : 300} />
        </Document>
        <div className="carousel-controls" style={{ marginTop: "1rem" }}>
          <button onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))} disabled={pageNumber === 1}>
            Previous
          </button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))} disabled={pageNumber === numPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
