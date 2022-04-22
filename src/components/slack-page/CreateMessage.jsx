import React, { useContext, useState, useRef, useEffect } from 'react';
import { GetUsers } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function CreateMessage({sendMessage}) {
  const {
    setCreateMessage,
    users,
    setUsers,
    setUserList,
    userList,
    body,
    setBody,
  } = useContext(UseContext);
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    const get = await GetUsers();
    const find = get.find((item) => item.email == users);
    console.log('find', find)
    if (find) {
      inputRef.current.focus();
      setErrorMessage('');
    } else {
      console.log(body);
      setErrorMessage('User not found');
    }
    if (body !== '' && find) {
      localStorage.setItem('users', JSON.stringify([...userList, find]));
      setUserList(JSON.parse(localStorage.getItem('users')));
      setUsers('')
      setErrorMessage('')
      setCreateMessage(false)
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className='create-message-modal'>
      <div className='create-message-container'>
        <input
          className='recipient'
          type='email'
          placeholder="Recipient's Email Address"
          value={users}
          onChange={(e) => {
            setUsers(e.target.value);
          }}
          onKeyPress={handleEnter}
        ></input>
        <div className='error-container'>
          <div className='error'>{errorMessage}</div>
        </div>
        <textarea
          ref={inputRef}
          className='textarea-modal'
          placeholder={`Message ${userList.email}`}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          onKeyPress={handleEnter}
        ></textarea>
        <div className='options'>
          <button className='send-message option'>Send Message</button>
          <div
            onClick={() => {
              setCreateMessage(false);
            }}
            className='exit option'
          >
            Exit
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMessage;
