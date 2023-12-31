import React from "react";
const ReactDOM = require('react-dom');

function Modal( {children} ){
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById("modal")
    )
}

export { Modal }