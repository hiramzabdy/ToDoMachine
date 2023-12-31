import "./Modal.css";
import React from "react";
const ReactDOM = require('react-dom');


function Modal( {children} ){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export { Modal }