import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'center', /*alignItems: 'flex-start'*/ alignSelf: 'flex-start'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black pa3 pointer'>Sign Out</p>
          {/* <p className='f3 link dim black pa3 pointer'></p> */}
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '1.5rem 0'}}>
          <h1 className='f1-m f1-l f3 fw5 ph0 mh0 center' style={{ /*marginLeft: '36vw', /*position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', /*fontSize: '4rem'*/}}>Face Recognition</h1>
          {/* <p onClick={() => onRouteChange('signin')} className='f3 link dim black pa4 pa3-m pa3-l pt5 pt3-m pt3-l pointer'>Sign In</p> */}
          {/* <p onClick={() => onRouteChange('register')} className='f3 link dim black pa4 pa3-m pa3-l pt5 pt3-m pt3-l pointer'>Register</p> */}
          {/* <p className='f3 link dim black pa3 pointer'></p> */}
        </nav>
      );
    }
}

export default Navigation;