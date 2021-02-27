import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';

const Card = ({ data, pinnedData }) => {
    const [background, setBackground] = useState('#fff');

    const handleChangeComplete = (color, e, key) => {
        console.log(key);
        setBackground(color.hex);
    }
    return (
        <div className="card">
            {
                pinnedData && pinnedData.map((singleNoteData, index) => (
                    <div key={singleNoteData.key} className={'card-component'} style={{ backgroundColor: background }}>
                        <h3>{singleNoteData.heading}</h3>
                        <h4>{singleNoteData.text}</h4>
                        <h5 className="tag-color">{singleNoteData.tag}</h5>
                        <i className="fas fa-thumbtack"></i>
                        <div> <TwitterPicker onChangeComplete={(e, color) => handleChangeComplete(e, color, singleNoteData.key)} /> </div>
                    </div>
                ))
            }

            {
                data && data.map((singleNoteData, index) => (
                    <div key={singleNoteData.key} className={'card-component'} style={{ backgroundColor: background }}>
                        <h3>{singleNoteData.heading}</h3>
                        <h4>{singleNoteData.text}</h4>
                        <h5 className="tag-color">{singleNoteData.tag}</h5>
                        <div> <TwitterPicker onChangeComplete={(e, color) => handleChangeComplete(e, color, singleNoteData.key)} /> </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Card;