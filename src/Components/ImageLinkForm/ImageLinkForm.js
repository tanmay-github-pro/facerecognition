import React from 'react';
import 'tachyons';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <p className='f3'>
                {'This Magin Brain will Detect faces in your pictures'}
            </p>
            <div className='center'>
                <div className='form center w-60 pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type= 'text' />
                    <button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;