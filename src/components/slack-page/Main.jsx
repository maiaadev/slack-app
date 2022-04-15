import React, { useContext } from 'react';
import UseContext from '../../context/UseContext';

function Main({name}) {
  const { channels } = useContext(UseContext);

  return (
    <div className='main'>
      <div className='channel-user'>
          <div className='user-email'>{name}</div>
        <div className='members'>Members</div>
      </div>
      <div className='messages'>test message</div>
      <textarea placeholder='Message Channel'></textarea>
      <i className='fa-solid fa-paper-plane send-button'></i>{' '}
    </div>
  );
  }

export default Main;
