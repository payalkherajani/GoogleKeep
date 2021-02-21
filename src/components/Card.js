import React from 'react';

const Card = ({ data }) => {
    console.log("from display", data);
    return (
        <div className="card">
            {
                data && data.map((singleNoteData, index) => (
                    <div key={singleNoteData.key} className={index % 2 === 0 ? 'card-component-green' : 'card-component-yellow'}>
                        <h4>{singleNoteData.heading}</h4>
                        <p>{singleNoteData.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;