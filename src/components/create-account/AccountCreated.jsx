import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../home-page/Logo';

function AccountCreated() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/sign-in')
    }
  return (
    <div className='account-created'>
      <div className='account-created-box'>
        <div className='account-created-message'>
         You are now registered!
        </div>
        <div className='account-created-button' onClick={handleNavigate}>Log-in</div>
        <i class="fa-solid fa-arrow-pointer"></i>
      </div>
    </div>
  );
}

export default AccountCreated;
