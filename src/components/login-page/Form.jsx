import React, { useState } from 'react';

function Form() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = (e) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={logIn} className='form'>
      <input
        type='email'
        name='email'
        value={email}
        required
        placeholder='Email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{' '}
      <input
        type='password'
        name='password'
        value={password}
        placeholder='Password'
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className='log-in'>Sign In</button>
    </form>
  );
}

export default Form;
