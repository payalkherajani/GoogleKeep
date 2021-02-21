import React, { useState } from 'react';
import Modal from './Modal';

export const Note = () => {
    const [showModal, setShowModal] = useState(false);

    const showModalFunction = () => {
        setShowModal(true);
    }
    const hideModalFunction = () => {
        setShowModal(false);
    }
    return (
        <div className="note">
            <button className="add-note" onClick={showModalFunction}>Add Note</button>
            {
                showModal === true ? (<Modal show={showModal} hideModal={hideModalFunction} />) : ("")
            }
        </div>
    )
}


