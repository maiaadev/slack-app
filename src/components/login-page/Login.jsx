import React from 'react';
import Logo from '../start-page/Logo';
import Form from './Form';

function Login() {
  return (
    <div className='login-page'>
      <div className='login'>
          <Logo />
        <div className='sign-in-text'>Sign in to Slack</div>
        <Form />
        <div className='create-account'>
          New to slack? <span>Create an account</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
