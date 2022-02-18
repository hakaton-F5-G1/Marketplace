import React from "react";
import ReactDom from "react-dom";
import "./modal.css";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "75px",
  zIndex: 1000,
};
const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};
export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLE}></div>
      <div style={MODAL_STYLES}>
        <div id="modal-container">
          <button id="modal-close-btn" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
