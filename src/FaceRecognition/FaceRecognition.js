import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = () => {
    return(
        <div className='picOut center'>
            <img alt='output' src={'https://samples.clarifai.com/face-det.jpg'} />
        </div>
    )
}

export default FaceRecognition;