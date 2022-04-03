import React from 'react';

function Form() {
  return (
    <form className='form'>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <button className='create-account-button'>Sign Up</button>
    </form>
  );
}

export default Form