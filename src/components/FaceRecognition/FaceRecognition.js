import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <>
      <div style={{ position: 'relative' }} className='center ma'>
        <div className='absolute mt2'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto' />
          <div className='bounding-box' style={{ top: box.topRow+63.999, right: box.rightCol, bottom: box.bottomRow+63.999, left: box.leftCol }}></div>
        </div>
      </div>
      {/* <div className='absolute footer' style={{ top: '100rem', minHeight: '4rem' }}></div> */}
    </>
  );
}

export default FaceRecognition;