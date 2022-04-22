import React, { useContext, useEffect, useState } from 'react';
import {
  AddMember,
  CreateChannel,
  GetChannel,
  GetUsers,
} from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function AddChannel({ id }) {
  const [channel, setChannel] = useState('');
  const { user, setChannels, setAddChannel, users } = useContext(UseContext);
  const [member, setMember] = useState('');
  const [memberList, setMemberList] = useState([]);
  const [error, setError] = useState('');
  const userDetails = JSON.parse(localStorage.getItem('user'));

  const handleAddChannel = async (e) => {
    const data = {
      name: channel,
      user_ids: [user.id],
    };

    const create = await CreateChannel(data);
    setChannel('');
    localStorage.setItem('channels', JSON.stringify(await GetChannel()));
    setChannels(JSON.parse(localStorage.getItem('channels')));
    setAddChannel(false);
  };

  const addChannelMember = async (e) => {
    // const data = {
    //   id: id,
    //   member_id: [user.id],
    // };

    // const add = await AddMember(data);
    const get = await GetUsers();
    const find = get.find((item) => item.email == member);
    console.log(find);

    if (find) {
      // localStorage.setItem('members', JSON.stringify([...memberList, find]));
      // setMemberList(JSON.parse(localStorage.getItem('members')));
      setMemberList([...memberList, find])
      setError('');
      setMember('')
    } else if (!find) {
      setError('User not found');
    }
  };


  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // handleAddChannel();
      addChannelMember();
      setMember('');
    }
  };

  const handleDelete = () => {
    memberList.pop()
  };

  return (
    <div className='add-channel-modal'>
      <div className='add-channel-container'>
        <input
          type='text'
          className='add-channel'
          placeholder='Channel Name'
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          onKeyPress={handleEnter}
        ></input>
        {error}
        <input
          type='email'
          placeholder='Add Members'
          className='add-member'
          value={member}
          onKeyPress={handleEnter}
          onChange={(e) => {
            setMember(e.target.value);
          }}
        ></input>
        <div className='member-list'>
          <div className='user-details'>{userDetails.email}</div>
          {memberList.map((prop) => {
            return (
              <div className='member-name'>
                <div>{prop.email}</div>
                <i onClick={handleDelete} className='fa-solid fa-trash-can' />
              </div>
            );
          })}
        </div>
        <button
          className='add-channel-button'
          onClick={() => {
            setAddChannel(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default AddChannel;
