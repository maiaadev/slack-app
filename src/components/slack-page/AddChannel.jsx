import React, { useContext, useEffect, useState } from 'react';
import { CreateChannel, GetChannel } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function AddChannel() {
  const [channel, setChannel] = useState('');
  const { user, setChannels, setAddChannel } = useContext(UseContext);

  const handleAddChannel = async (e) => {

    const data = {
      name: channel,
      user_ids: [user.id],
    };

    const create = await CreateChannel(data);
    setChannel('');
    localStorage.setItem('channels', JSON.stringify(await GetChannel()));
    setChannels(JSON.parse(localStorage.getItem('channels')));
    setAddChannel(false)
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddChannel()
    }
  }

  return (
    <div className='add-channel-modal'>
      <div className='add-channel-container'>
      <input
        type='text'
        className='add-channel'
        placeholder='Add channel'
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        onKeyPress={handleEnter}
      ></input>
      <button onClick={() => {setAddChannel(false)}}>Close</button>
    </div>
    </div>
  );
}

export default AddChannel;
