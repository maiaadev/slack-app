import React from 'react';
import logo from '../../assets/images/logo.png';

function Logo() {
  return (
    <div className='slack'>
      <img src={logo} className='logo' />
      <div className='title'>slack</div>
    </div>
  );
}

export default Logo;
