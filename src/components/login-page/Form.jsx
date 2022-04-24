import React, { useContext, useState } from 'react';
import { GetChannel, GetUsers, LogIn } from '../../api/Fetch';
import { useNavigate } from 'react-router-dom';
import UseContext from '../../context/UseContext';

function Form() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {setUser, setChannels, channels } = useContext(UseContext);
  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const [headers, userdata] = await LogIn(data);

    if (userdata == 401) {
      setErrorMessage(headers);
      setIsLoggedIn(false);
    } else {
      setUser(userdata);
      localStorage.setItem('user', JSON.stringify(userdata));
      localStorage.setItem('header', JSON.stringify(headers));
      localStorage.setItem('channels', JSON.stringify(await GetChannel()));
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
      navigate('/slack/slack-bot');
    }

    if (channels !== undefined) {
      setChannels(JSON.parse(localStorage.getItem('channels')));
    } else {
      setChannels([]);
    }
  };

  return (
    <form onSubmit={logIn} className='form'>
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
