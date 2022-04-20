import React, { useEffect, useState, useRef, useContext } from 'react';
import { RetrieveMessage, SendMessage } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function Main({ name, id }) {
  const [body, setBody] = useState('');
  const { message, setMessage, channels } = useContext(UseContext);

  const messageEndRef = useRef(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [message])

  useEffect(() => {
    getMessage();
    setMessage([]);
  }, [id]);

  const getMessage = async () => {
    const data = {
      id: id,
      class: 'Channel',
    };
    const messages = await RetrieveMessage(data);

    setMessage(messages);
  };

  const sendMessage = async () => {
    const data = {
      receiver_id: id,
      receiver_class: 'Channel',
      body: body,
    };

    const send = await SendMessage(data);
    console.log('data', data);
    console.log('messages', message);
    getMessage();
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
      setBody('');
    }
  };

  return (
    <div className='slack-page'>
      <div className='main'>
        <div className='channel-user'>
          <div className='user-channel'>{name}</div>
          <div className='members'>Members</div>
        </div>
        <div className='body'>
          {message.map((prop) => {
            return (
              <div key={prop.id} className='message'>
                <div className='flex'>
                  <div className='sender'>{prop.sender.email}</div>
                  <div className='messages'>{prop.body}</div>
                </div>
                <div className='date'>
                  <div>{prop.sender.created_at.substr(0, 10)}</div>
                  <div>{prop.sender.created_at.substr(11, 8)}</div>
                </div>
              </div>
            );
          })}
          <div ref={messageEndRef}></div>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            onKeyPress={handleSubmit}
            placeholder={`Message ${name}`}
          ></textarea>
          <i className='fa-solid fa-paper-plane send-button' />
        </form>
      </div>
    </div>
  );
}

export default Main;
