import React, { useEffect, useContext } from 'react';
import {
  GetChannelMembers,
  GetUsers,
  RetrieveMessage,
  SendMessage,
} from '../../api/Fetch';
import UseContext from '../../context/UseContext';
import MemberList from './MemberList';
import Modal from '../Modal';

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
    user,
    channelMembers,
  } = useContext(UseContext);
  const receiverClass = data.email ? true : false;
  const avatarUser = `${avatar}avion-${data.email}.svg`;

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [message]);

  useEffect(() => {
    setMessage([]);
  }, [id]);

  useEffect(() => {
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
            <i class='fa-solid fa-angle-down'></i>
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
                <i class='fa-solid fa-user-group'></i>
                {channelMembers.length}
              </div>
            )}
          </div>
        </div>
        <div className='body'>
          {receiverClass && (
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
                {/* <div className='date'>
                  <div>{prop.sender.created_at.substr(0, 10)}</div>
                  <div>{prop.sender.created_at.substr(11, 8)}</div>
                </div> */}
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
              <i class='fa-solid fa-bars'></i>
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
              <i class='fa-solid fa-circle-plus'></i>
              <i className='fa-solid fa-video' />
              <i className='fa-solid fa-microphone' />
              <i className='fa-regular fa-face-smile' />
              <i className='fa-solid fa-at' />
              <i class='fa-solid fa-font'></i>
            </div>
            <div className='right'>
              <i onClick={sendMessage} className='fa-solid fa-paper-plane' />
              <i className='fa-solid fa-angle-down' />
            </div>
          </div>
        </div>
      </div>
      <Modal open={isOpenMembersModal}>
        <MemberList id={id} name={name} />
      </Modal>
    </div>
  );
}

export default Main;
