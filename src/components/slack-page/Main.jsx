import React, { useEffect, useState } from 'react';
import { RetrieveMessage } from '../../api/Fetch';

function Main({ name, id }) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    handleMessage();
    setMessage([])
    console.log('useEffect')
  },[id]);

  // useEffect(() => {
  //   handleMessage();
  //   setMessage([])
  //   console.log('useEffectEmpty')
  // },[]);

  const handleMessage = async () => {
    const data = {
      id: id,
      class:"Channel",
    };
    const messages = await RetrieveMessage(data);

    setMessage(messages)
    console.log('messages:', messages)
    console.log('message:', message)
  };
  // handleMessage();
  return (
    <div className='main'>
      <div className='channel-user'>
        <div className='user-channel'>{name}</div>
        <div className='members'>Members</div>
      </div>
      {message.map((prop) => {
        return <div key={prop.id} className='messages'>{prop.body}</div>;
      })}
      <textarea placeholder={`Message ${name}`}></textarea>
      <i className='fa-solid fa-paper-plane send-button'/>
    </div>
  );
}

export default Main;
