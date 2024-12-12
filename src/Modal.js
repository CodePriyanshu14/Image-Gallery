import React from 'react';
import './Modal.css';

function Modal({ image, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        <div className="modal-description">{image.caption}</div>
        <button className="close-btn" onClick={closeModal}>X</button>
      </div>
    </div>
  );
}

export default Modal;
