import React, { useState } from 'react';
import Modal from './Modal';
import Card from './Card';

export const Note = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalTag, setShowModalTag] = useState(false);
    const [note, setNote] = useState([]);
    const [heading, setHeading] = useState("");
    const [tag, setTag] = useState("");
    const [text, setText] = useState("");
    const [tags, setTags] = useState([]);
    const [pinned, setPinned] = useState(false);
    const [pinnedNotes, setPinnedNotes] = useState([]);

    const showModalFunction = () => {
        setShowModal(true);
    }
    const showModalFunctionTag = () => {
        setShowModalTag(true);
    }
    const hideModalFunction = () => {
        setShowModal(false);

    }
    const hideModalFunctionTag = () => {
        setShowModalTag(false);
    }
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        if (name === "heading") {
            setHeading(value);
        }
        if (name === "text") {
            setText(value);
        }
        if (name === "tag") {
            setTag(value);
        }
    }
    const onDropDownChange = (e) => {
        setTag(e.target.value);
    }
    const addNote = () => {
        if (heading !== "" && text !== "" && tag !== "") {
            const newNote = {
                heading,
                text,
                tag,
                pinned,
                key: Date.now()
            }
            if (newNote.pinned === true) {
                setPinnedNotes([...pinnedNotes, newNote]);
            }
            else {
                setNote([...note, newNote]);
            }
            setHeading("");
            setText("");
            setPinned(false);
        }
        else {
            alert("Please add heading, title and tag");
            setHeading("");
            setText("");
        }
    }
    const addTag = () => {
        if (tag !== "") {
            const newTag = {
                tag,
                key: Date.now()
            }
            setTags([...tags, newTag]);
            setTag("");
        }
        else {
            alert("Enter tag");
            setTag("")
        }
    }

    const filternotesontag = (t) => {
        if (note.length > 0) {

            const mapped = note.map(function (n, i) {
                return { index: i, value: n };
            })

            mapped.sort(function (a, b) {
                if (b.value.tag === t.tag) {
                    return 1;
                }
                if (a.value.tag === t.tag) {
                    return -1;
                }
                return 0;
            });

            const result = mapped.map(function (n) {
                return note[n.index];
            });
            setNote(result);
        }
    }

    const enablePin = () => {
        setPinned(true);
    }

    return (
        <div className="note">
            <button className="add-note" onClick={showModalFunction} >Add Note</button>
            <button className="add-tag" onClick={showModalFunctionTag} >Add Tag</button>
            {
                showModal === true ? (
                    <Modal show={showModal} hideModal={hideModalFunction}>
                        <input type="text" placeholder="Enter heading here..." className="modal-input" value={heading} onChange={onChangeInput} name="heading" required />
                        <textarea placeholder="Add Note here..." className="modal-textarea" rows={5} value={text} onChange={onChangeInput} name="text" required></textarea>
                        <select as='type' name="tags" onChange={onDropDownChange}>
                            <option value="0">Select Tag</option>
                            {
                                tags.map((t) => <option value={t.tag} key={t.key}>{t.tag}</option>)
                            }
                        </select>
                        <span> <input type="checkbox" value={pinned} onClick={enablePin} /> Pinned </span>
                        <button onClick={addNote} className="modal-add">Add</button>
                    </Modal>

                ) : ("")
            }
            {
                showModalTag === true ? (
                    <Modal show={showModalTag} hideModal={hideModalFunctionTag}>
                        <input type="text" placeholder="Enter tag here..." className="modal-input" value={tag} onChange={onChangeInput} name="tag" required />
                        <button onClick={addTag} className="modal-add">Add</button>
                    </Modal>
                ) : (" ")
            }
            <h2 className="note-tag-heading">Tags</h2>
            <aside className="note-tags">
                {
                    tags.map((t) =>
                        <div key={t.key} className={'tag-component'}>
                            <h4 onClick={() => filternotesontag(t)} className="tag-transform">{t.tag}</h4>
                        </div>
                    )
                }
            </aside>
            <section className="note-section">
                <Card data={note} pinnedData={pinnedNotes} />
            </section>
        </div>
    )
}


