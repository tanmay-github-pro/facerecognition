import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='picOut center'>
            <img id ='inputImage' src={imageUrl} alt='' />
        </div>
    )
}

export default FaceRecognition;