import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div style={{width: '150px', height: '100px', margin: '4em'}} className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2">
                <div>
                    <img src={brain} alt='brain picture' />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;