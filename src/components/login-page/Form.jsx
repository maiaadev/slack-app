import React from 'react';

function Form() {
  return (
    <form className='form'>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <button className='log-in'>Sign In</button>
    </form>
  );
}

export default Form
