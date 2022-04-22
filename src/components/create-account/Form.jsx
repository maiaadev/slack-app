import React, { useContext, useState } from 'react';
import { Register } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {setIsOpenCreateModal} = useContext(UseContext)

  const createAccount = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    };

    const register = await Register(data);

    if (register) {
      setErrorMessage(register);
    } else {
      setIsSubmitted(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
      setIsOpenCreateModal(true);
    }
  };

  return (
    <form onSubmit={createAccount} className='form'>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <input
        type='email'
        name='email'
        value={email}
        required
        placeholder='Email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
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
      <input
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        required
        placeholder='Confirm Password'
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <button className='create-account-button'>Sign Up</button>
    </form>
  );
}

export default Form;
