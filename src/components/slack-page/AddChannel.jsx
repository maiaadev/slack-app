import React, { useContext, useEffect, useState } from 'react';
import { CreateChannel, GetChannel } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function AddChannel() {
  const [channel, setChannel] = useState('');
  const { user, setChannels } = useContext(UseContext);

  const handleAddChannel = async (e) => {
    e.preventDefault();

    const data = {
      name: channel,
      user_ids: [user.id],
    };

    const create = await CreateChannel(data);
    setChannel('');
    localStorage.setItem('channels', JSON.stringify(await GetChannel()));
    setChannels(JSON.parse(localStorage.getItem('channels')))

    // console.log(create);
  };

  return (
    <form onSubmit={handleAddChannel}>
      <input
        type='text'
        className='add-channel'
        placeholder='Add channel'
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
      ></input>
    </form>
  );
}

export default AddChannel;
