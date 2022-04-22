import React, { useContext } from 'react';
import UseContext from '../../context/UseContext';

function MemberList({ channelMembers }) {
  const { setShowMembers } = useContext(UseContext);

  return (
    <div className='member-list-modal'>
      <div className='member-list-container'>
        <div className='top-modal'>
          <i
            onClick={() => {
              setShowMembers(false);
            }}
            className='fa-solid fa-circle-xmark'
          />
        </div>
        <div className='member-list-title'>Channel Members</div>
        {channelMembers.map((prop) => {
          return (
            <div key={prop.user_id} className='channel-members'>
              {prop.email}
            </div>
          );
        })}
        <input
          type='text'
          className='add-channel-member'
          placeholder='Add Member'
        />
      </div>
    </div>
  );
}

export default MemberList;
