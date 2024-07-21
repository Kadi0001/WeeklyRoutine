import React, { useState } from 'react';


const Modal = ({ showModal, setShowModal, children }) => {
  const closeModal = () => setShowModal(false);

  return (
    showModal && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
