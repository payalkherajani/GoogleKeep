import React from 'react';

const Modal = ({ hideModal, show }) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-children">
                    <input type="text" placeholder="Enter heading here..." className="modal-input" />
                    <textarea placeholder="Add Note here..." className="modal-textarea" rows={5}></textarea>
                    <button onClick={() => hideModal()} className="modal-add">Add</button>
                    <button onClick={() => hideModal()} className="modal-close">Close</button>
                </div>
            </section>
        </div>
    )
}

export default Modal;