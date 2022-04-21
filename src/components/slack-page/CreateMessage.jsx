import React, { useContext, useState, useRef, useEffect } from 'react';
import { GetUsers } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function CreateMessage() {
  const { setCreateMessage } = useContext(UseContext);
  const [users, setUsers] = useState('');
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    const get = await GetUsers();
    console.log(get);
    const find = get.find((item) => item.email == users);
    if (find) {
      inputRef.current.focus();
      setErrorMessage('');
    } else {
      setErrorMessage('User not found');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
    if (e.key === 'Tab') {
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
          placeholder='Message'
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
