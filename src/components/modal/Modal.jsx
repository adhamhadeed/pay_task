import React from "react";
import "./index.scss";

const Modal = ({ children, modalData, onClose }) => {
  const showHideClassName = modalData
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal__main">
        <div className="modal__main__content">
          <div className="modal__main__content__header" onClick={onClose}>
            x
          </div>
          <div className="modal__main__content__body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
