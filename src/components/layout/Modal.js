import React from 'react'
import ReactDOM from 'react-dom';
import classes from '../../assets/styles/Main.module.css';
import {MdOutlineCloseFullscreen} from 'react-icons/md'
function Modal({children, modalOpen, close}) {
    if(!modalOpen) return null;
    return ReactDOM.createPortal(
        <div className={classes.modal}>
            <div className={classes.overlay} onClick={close}></div>
            <div className={classes.modal_content}>
                <div><MdOutlineCloseFullscreen onClick={close}/></div>
                {children}
            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default Modal