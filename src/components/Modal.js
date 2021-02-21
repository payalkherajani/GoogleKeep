import React from 'react';

const Modal = ({ hideModal, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-children">
                    {children}
                    <button onClick={() => hideModal()} className="modal-close">Close</button>
                </div>
            </section>
        </div>
    )
}

export default Modal;