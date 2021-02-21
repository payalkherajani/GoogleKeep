import React, { useState } from 'react';
import Modal from './Modal';
import Card from './Card';

export const Note = () => {
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState([]);
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");

    const showModalFunction = () => {
        setShowModal(true);
    }
    const hideModalFunction = () => {
        setShowModal(false);
    }
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        if (name === "heading") {
            setHeading(value);
        }
        if (name === "text") {
            setText(value);
        }
    }
    const addNote = () => {
        if (heading !== "" && text !== "") {
            const newNote = {
                heading,
                text,
                key: Date.now()
            }
            setNote([...note, newNote]);
            setHeading("");
            setText("");
        }
        else {
            alert("Please add heading and title");
            setHeading("");
            setText("");
        }
    }
    return (
        <div className="note">
            <button className="add-note" onClick={showModalFunction}>Add Note</button>
            {
                showModal === true ? (
                    <Modal show={showModal} hideModal={hideModalFunction}>
                        <input type="text" placeholder="Enter heading here..." className="modal-input" value={heading} onChange={onChangeInput} name="heading" required />
                        <textarea placeholder="Add Note here..." className="modal-textarea" rows={5} value={text} onChange={onChangeInput} name="text" required></textarea>
                        <button onClick={addNote} className="modal-add">Add</button>
                    </Modal>

                ) : ("")
            }
            {
                <section className="note-section">
                    <Card data={note} />
                </section>
            }
        </div>
    )
}


