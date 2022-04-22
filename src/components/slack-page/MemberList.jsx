import React, { useContext } from 'react';
import UseContext from '../../context/UseContext';

function MemberList({ channelMembers }) {
  const { setShowMembers } = useContext(UseContext);
  return (
    <div className='member-list-modal'>
      <div className='member-list-container'>
        <div className='top-modal'>
          <div className='member-list-title'>Channel Members:</div>
          <i
            onClick={() => {
              setShowMembers(false);
            }}
            className='fa-solid fa-circle-xmark'
          />{' '}
        </div>
        {channelMembers.map((prop) => {
          return <div className='channel-members'>{prop.user_id}</div>;
        })}
        <input type='text' placeholder='Add Member' />
      </div>
    </div>
  );
}

export default MemberList;
