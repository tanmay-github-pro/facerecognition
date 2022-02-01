import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div style={{/*marginRight: '20rem'*/}} className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: '5rem', width: 'auto' }} >
        <div className="Tilt-inner pa3">
          <img style={{display: 'inline', padding: '4px', width: 'auto', height: '80%'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
