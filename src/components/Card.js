import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="card">
            {
                data && data.map((singleNoteData, index) => (
                    <div key={singleNoteData.key} className={'card-component'}>
                        <h3>{singleNoteData.heading}</h3>
                        <h4>{singleNoteData.text}</h4>
                        <h5 className="tag-color">{singleNoteData.tag}</h5>
                        { singleNoteData.pinned === true ? (<span><i className="fas fa-thumbtack"></i> {console.log(singleNoteData)}</span>) : ("")}
                    </div>
                ))
            }
        </div>
    )
}

export default Card;