import React from 'react';
import Logo from '../home-page/Logo';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/sign-up');
  };

  return (
    <div className='login-page'>
      <div className='login'>
        <Logo />
        <div className='sign-in-text'>Sign in to Slack</div>
        <Form />
        <div className='create-account'>
          New to slack? <span onClick={handleNavigate}>Create an account</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
