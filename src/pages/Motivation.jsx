import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Important for accessibility

export default function Motivation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <h2>Enhancing Motivation in the U.S. Air Force</h2>
      <p>This research paper explores morale and retention using motivation theory.</p>

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
          src="/Motivation.pdf"
          title="Motivation Paper"
          className="pdf-viewer"
        ></iframe>
      </Modal>
    </div>
  );
}
