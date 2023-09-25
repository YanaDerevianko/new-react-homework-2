import React from "react";
import { useState } from "react";
import "./ModalWindow.css";

export const ModalWindow = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="component-wrapper">
      <h2 className="component-name">Component 'ModalWindow'</h2>
      <button onClick={openModal}>See more</button>
      {isModalOpen && (
        <div className="modal-window-wrapper">
          <div className="modal-window-content">
            <span onClick={closeModal} className="close-button">
              &#10008;
            </span>
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
};
