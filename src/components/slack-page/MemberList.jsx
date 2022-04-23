import React, { useContext, useState } from 'react';
import { AddChannelMember, GetUsers } from '../../api/Fetch';
import UseContext from '../../context/UseContext';

function MemberList({id}) {
  const { setIsOpenMembersModal, channelMembers, setChannelMembers, members } = useContext(UseContext);
  const [addMemberInput, setAddMemberInput] = useState('');

  const addMember = async () => {
    const users = await GetUsers()
    const user = users.find((user) => user.email == addMemberInput)
    const data = {
      id: id,
      member_id: user.id
    }
    console.log(data)

    const add = await AddChannelMember(data)
    setChannelMembers([...members, add])
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addMember();
      setAddMemberInput('')
    }
  }

  return (
    <div className='member-list-modal'>
      <div className='member-list-container'>
        <div className='top-modal'>
          <i
            onClick={() => {
              setIsOpenMembersModal(false);
            }}
            className='fa-solid fa-circle-xmark'
          />
        </div>
        <div className='member-list-title'>Channel Members</div>
        {channelMembers && channelMembers.map((prop) => {
          return (
            <div key={prop.id} className='channel-members'>
              {prop.email}
            </div>
          );
        })}
        <input
          type='text'
          className='add-channel-member'
          placeholder='Add Member'
          value={addMemberInput}
          onKeyPress={handleEnter}
          onChange={(e) => {
            setAddMemberInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default MemberList;
