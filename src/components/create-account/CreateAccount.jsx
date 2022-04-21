import React, { useContext, useState } from 'react';
import Logo from '../home-page/Logo';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import UseContext from '../../context/UseContext';
import AccountCreated from './AccountCreated';

function Create() {
  const { accountCreated, setAccountCreated } = useContext(UseContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/sign-in');
  };

  return (
    <div className='create-account-page'>
      <div className='create'>
        <Logo />
        <div
          className='create-account-text'
        >
          Create Account
        </div>
        <Form />
        <div className='sign-in-option'>
          Already have an account? <span onClick={handleNavigate} >Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Create;
