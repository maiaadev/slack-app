import React, { useContext, useState } from 'react';
import { CreateChannel, GetChannel, GetUsers } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function AddChannel() {
  const [channel, setChannel] = useState('');
  const { user, setChannels, setIsOpenChannelModal, memberList } =
    useContext(UseContext);

  const handleAddChannel = async (e) => {
    const data = {
      name: channel,
      user_ids: [user.id],
    };

    const create = await CreateChannel(data);
    setChannel('');
    localStorage.setItem('channels', JSON.stringify(await GetChannel()));
    setChannels(JSON.parse(localStorage.getItem('channels')));
    setIsOpenChannelModal(false);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddChannel();
    }
  };

  return (
    <div className='add-channel-modal'>
      <div className='add-channel-container'>
        <div className='top'>
          <div className='title'>Add Channel</div>
          <i
            onClick={() => {
              setIsOpenChannelModal(false);
            }}
            className='fa-solid fa-xmark'
          />
        </div>
        <div className='main'>
          <input
            type='text'
            className='add-channel'
            placeholder='Channel Name'
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            onKeyPress={handleEnter}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default AddChannel;
