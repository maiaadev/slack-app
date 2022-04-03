import React from 'react';
import Logo from '../start-page/Logo';
import Form from './Form';

function Create() {
  return (
    <div className='create-account-page'>
      <div className='create'>
          <Logo />
        <div className='create-account-text'>Create Account</div>
        <Form />
        <div className='sign-in-option'>
          Already have an account? <span>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Create;
