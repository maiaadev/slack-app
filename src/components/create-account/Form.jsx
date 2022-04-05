import React, { useState } from 'react';

function Form() {
  const [account, setAccount] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [id, setId] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setErrorMessage('Please enter a valid email');
    }
  };

  const createAccount = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setIsSubmitted(false);
      setErrorMessage('Passwords do not match');
    } else if (
      email !== '' &&
      password !== '' &&
      confirmPassword === password &&
      emailRegex.test(email)
    ) {
      setIsSubmitted(true);
      setAccount([...account, { id: id, email: email, password: password }]);
      setId(id + 1);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid email');
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
