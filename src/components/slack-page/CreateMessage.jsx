import React, { useContext, useState, useRef, useEffect } from 'react';
import { GetUsers } from '../../api/Fetch';
import UseContext from '../../context/UseContext';
import { SendMessage } from '../../api/Fetch';
import { useNavigate } from 'react-router-dom';

function CreateMessage() {
  const {
    setIsOpenMessageModal,
    users,
    setUsers,
    setUserList,
    userList,
    body,
    setBody,
  } = useContext(UseContext);
  const inputRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const get = await GetUsers();
    const find = get.find((item) => item.email == users);
    console.log('find', find);
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
      sendMessage(find.id);
      navigate(`/slack/${find.id}`);
      setUsers('');
      setBody('');
      setErrorMessage('');
      setIsOpenMessageModal(false);
    } else if (body == '' && find) {
      localStorage.setItem('users', JSON.stringify([...userList, find]));
      setUserList(JSON.parse(localStorage.getItem('users')));
      navigate(`/slack/${find.id}`);
      setUsers('');
      setErrorMessage('');
      setIsOpenMessageModal(false);
    }
  };

  const sendMessage = async (id) => {
    const data = {
      receiver_id: id,
      receiver_class: 'User',
      body: body,
    };

    const send = await SendMessage(data);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    setErrorMessage('');
  }, [users]);

  return (
    <div className='create-message-modal'>
      <div className='create-message-container'>
        <div className='top'>
          <div className='new-message'>New Message</div>
          <i
            onClick={() => {
              setIsOpenMessageModal(false);
            }}
            className='fa-solid fa-xmark'
          />
        </div>
        <div className='main'>
          <div className='receiver'>
            <div className='to'>To:</div>
            <input
              type='email'
              placeholder='name@email.com'
              value={users}
              onChange={(e) => {
                setUsers(e.target.value);
              }}
              onKeyPress={handleEnter}
            />
          </div>
          <div className='error-message'>{errorMessage}</div>
          <div className='textarea'>
            <div className='container-top'>
              <div className='top-icon'>
                <i className='fa-solid fa-bold' />
                <i className='fa-solid fa-italic' />
                <i className='fa-solid fa-strikethrough' />
                <i className='fa-solid fa-link' />
                <i className='fa-solid fa-list-ol' />
                <i className='fa-solid fa-list-ul' />
                <i class='fa-solid fa-bars' />
                <i className='fa-solid fa-code' />
                <i className='fa-solid fa-laptop-code' />
              </div>
            </div>
            <textarea
              ref={inputRef}
              className='textarea-modal'
              placeholder='Start a new message'
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
              onKeyPress={handleEnter}
            />
            <div className='container-bottom'>
              <div className='left'>
                <i className='fa-solid fa-circle-plus' />
                <i className='fa-solid fa-video' />
                <i className='fa-solid fa-microphone' />
                <i className='fa-regular fa-face-smile' />
                <i className='fa-solid fa-at' />
                <i className='fa-solid fa-font' />
              </div>
              <div className='right'>
                <i onClick={handleSubmit} className='fa-solid fa-paper-plane' />
                <i className='fa-solid fa-angle-down' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMessage;
