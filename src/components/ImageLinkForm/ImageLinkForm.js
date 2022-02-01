import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div id='image_link_form_component'>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      {/* <div className='center'> */}
        <div className='form center pa4 br3 shadow-5 custom-contain'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
          <button
            className='w-25 grow f4 f4-m f4-l f7 link ph3 pv2 white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      {/* </div> */}
    </div>
  );
}

export default ImageLinkForm;