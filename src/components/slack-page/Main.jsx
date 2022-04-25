import React, { useEffect, useContext, useState } from 'react';
import {
  GetChannelMembers,
  GetUsers,
  RetrieveMessage,
  SendMessage,
} from '../../api/Fetch';
import UseContext from '../../context/UseContext';
import MemberList from './MemberList';
import Modal from '../Modal';
import Loading from './Loading';

function Main({ name, id, data }) {
  const {
    message,
    setMessage,
    body,
    setBody,
    isOpenMembersModal,
    setIsOpenMembersModal,
    messageEndRef,
    setChannelMembers,
    avatar,
    isLoading,
    setIsLoading,
    channelMembers,
  } = useContext(UseContext);
  const receiverClass = data.email ? true : false;
  const avatarUser = `${avatar}avion-${data.email}.svg`;
  const user = JSON.parse(localStorage.getItem('user'));
  const ownerID = data.owner_id == user.id;

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [message]);

  useEffect(() => {
    setMessage([]);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    const interval = setInterval(() => {
      getMessage();
    }, 1000);
    return () => clearInterval(interval);
  }, [id]);

  const getMessage = async () => {
    const data = {
      id: id,
      class: receiverClass ? 'User' : 'Channel',
    };
    const messages = await RetrieveMessage(data);

    setMessage(messages);
    setIsLoading(false);
  };

  const sendMessage = async () => {
    const data = {
      receiver_id: id,
      receiver_class: receiverClass ? 'User' : 'Channel',
      body: body,
    };

    const send = await SendMessage(data);
    getMessage();
    setBody('');
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    getMembers();
  }, [id, channelMembers]);

  const getMembers = async () => {
    const users = await GetUsers();
    const get = await GetChannelMembers(id);
    const members = get.map((member) =>
      users.find((user) => user.id == member.user_id)
    );
    setChannelMembers(members);
  };

  return (
    <div className='slack-page'>
      <div className='main'>
        <div className='channel-user'>
          <div className='user-channel'>
            {receiverClass ? (
              <img className='avatar' src={avatarUser} alt='' />
            ) : (
              <i className='fa-solid fa-lock' />
            )}
            {name}
            <i className='fa-solid fa-angle-down' />
          </div>

          <div
            onClick={() => {
              setIsOpenMembersModal(true);
            }}
            className='members-container'
          >
            {receiverClass ? (
              ''
            ) : (
              <div className='members'>
                <i className='fa-solid fa-user-group' />
                {channelMembers.length}
              </div>
            )}
          </div>
        </div>
        <div className='body'>
          {isLoading && <Loading />}
          {receiverClass && !isLoading && (
            <div className='beginning-container'>
              <div className='beginning'>
                <div className='details'>
                  <img src={`${avatar}avion-${data.email}.svg`} alt='avatar' />
                  <div className='name'>
                    <div className='online'>
                      {name}
                      <i className='fa-solid fa-circle' />
                    </div>
                    <div className='work'>
                      {name}
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </div>
                <div className='beginning-message'>
                  This is the very beginning of your direct message history with{' '}
                  <span>{name}</span>. Only the two of you are in this
                  conversation, and no one else can join it.{' '}
                  <span>Learn more</span>.
                </div>
              </div>
            </div>
          )}
          {message.map((prop) => {
            return (
              <div key={prop.id} className='message'>
                <div className='flex'>
                  <img
                    className='avatar-message'
                    src={`${avatar}avion-${prop.sender.email}.svg`}
                    alt=''
                  />
                  <div>
                    <div className='sender'>{prop.sender.email}</div>
                    <div className='messages'>{prop.body}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messageEndRef}></div>
        </div>
        <div className='textarea'>
          <div className='container-top'>
            <div className='top-icon'>
              <i className='fa-solid fa-bold' />
              <i className='fa-solid fa-italic' />
              <i className='fa-solid fa-strikethrough' />
              <i className='fa-solid fa-link' />
              <i className='fa-solid fa-list-ol' />
              <i className='fa-solid fa-list-ul' />
              <i className='fa-solid fa-bars' />
              <i className='fa-solid fa-code' />
              <i className='fa-solid fa-laptop-code' />
            </div>
          </div>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            onKeyPress={handleSubmit}
            placeholder={`Message ${name}`}
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
              <i onClick={sendMessage} className='fa-solid fa-paper-plane' />
              <i className='fa-solid fa-angle-down' />
            </div>
          </div>
        </div>
      </div>
      <Modal open={isOpenMembersModal}>
        <MemberList id={id} name={name} ownerID={ownerID} />
      </Modal>
    </div>
  );
}

export default Main;
