import React from 'react';
import Logo from '../home-page/Logo';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/sign-in');
  };

  return (
    <div className='create-account-page'>
      <div className='create'>
        <Logo />
        <div className='create-account-text'>Create Account</div>
        <Form />
        <div className='sign-in-option'>
          Already have an account? <span onClick={handleNavigate}>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Create;
