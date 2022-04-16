import React, { useEffect, useState } from 'react';
import { RetrieveMessage } from '../../api/Fetch';

function Main({ name, id }) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    handleMessage();
    setMessage([]);
    console.log('useEffect');
  }, [id]);

  // useEffect(() => {
  //   handleMessage();
  //   setMessage([])
  //   console.log('useEffectEmpty')
  // },[]);

  const handleMessage = async () => {
    const data = {
      id: id,
      class: 'Channel',
    };
    const messages = await RetrieveMessage(data);

    setMessage(messages);
    console.log('messages:', messages);
    console.log('message:', message);
  };
  // handleMessage();
  return (
    <div className='main'>
      <div className='channel-user'>
        <div className='user-channel'>{name}</div>
        <div className='members'>Members</div>
      </div>
      <div className='body'>
        {message.map((prop) => {
          console.log('date', prop.sender.created_at.substr(0, 10));
          return (
            <div key={prop.id} className='message'>
              <div className='flex'>
                <div className='sender'>{prop.sender.email}</div>{' '}
                <div className='messages'>{prop.body}</div>
              </div>
              <div className='date'>
                <div>{prop.sender.created_at.substr(0, 10)}</div>
                <div>{prop.sender.created_at.substr(11, 11)}</div>
              </div>
            </div>
          );
        })}
      </div>
      <textarea placeholder={`Message ${name}`}></textarea>
      <i className='fa-solid fa-paper-plane send-button' />
    </div>
  );
}

export default Main;
