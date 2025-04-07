import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function StrategicPlanning() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="content">
      <h2>Strategic Planning and Leadership</h2>
      <p>
        This paper explores the role of leadership in strategic planning, including five key leadership tasks:
        understanding the context, understanding people (including self), championing the process,
        facilitating the process, and using dialogue.
      </p>

      <button onClick={() => setModalIsOpen(true)} className="download-button">
        View Paper
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="PDF Viewer"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button onClick={() => setModalIsOpen(false)} className="close-button">✖</button>
        <iframe
          src="/StrategicPlanning.pdf"
          title="Strategic Planning PDF"
          className="pdf-viewer"
        ></iframe>
      </Modal>
    </div>
  );
}
