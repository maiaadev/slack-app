import React, { useContext, useEffect, useState } from 'react';
import { AddChannelMember, GetChannelMembers, GetUsers } from '../../api/Fetch';
import UseContext from '../../context/UseContext';
import Loading from './Loading';

function MemberList({ id, name, ownerID }) {
  const {
    setIsOpenMembersModal,
    channelMembers,
    setChannelMembers,
    members,
    avatar,
    search,
    setSearch,
  } = useContext(UseContext);
  const [addMemberInput, setAddMemberInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [addMemberInput]);

  const addMember = async () => {
    const users = await GetUsers();
    const user = users.find((user) => user.email == addMemberInput);
    if (user) {
      const data = {
        id: id,
        member_id: user.id,
      };
      const add = await AddChannelMember(data);
      console.log(add);
      if (add.errors) {
        setError(add.errors);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setChannelMembers([members, add]);
    } else {
      setIsLoading(false);
      setError('User not found');
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, [channelMembers]);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setIsLoading(true);
      addMember();
      setAddMemberInput('');
    }
  };

  return (
    <div className='member-list-modal'>
      <div className='member-list-container'>
        <div className='top'>
          <div className='channel-name'>
            <i className='fa-solid fa-lock' />
            {name}
          </div>
          <i
            onClick={() => {
              setIsOpenMembersModal(false)
              setSearch('');
            }}
            className='fa-solid fa-xmark'
          />
        </div>
        <div className='options-modal'>
          <div className='first'>
            <i className='fa-solid fa-star' />
            <i className='fa-solid fa-angle-down' />
          </div>
          <div className='second'>
            <i className='fa-solid fa-bell' /> Get Notifications for All
            Messages <i class='fa-solid fa-angle-down' />
          </div>
          <div className='third'>
            <i className='fa-solid fa-phone' /> Start a call
          </div>
        </div>
        <div className='nav'>
          <div className='about'>About</div>
          <div className='members-modal'>
            <span>Members</span> {channelMembers.length}
          </div>
        </div>
        <div className='main'>
          <div className='search'>
            <i className='fa-solid fa-magnifying-glass' />
            <input
              type='email'
              placeholder='Find members'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className='list-members'>
            {isLoading && <Loading />}
            {!isLoading &&
              channelMembers &&
              channelMembers
                .filter((item) => {
                  if (
                    search === '' ||
                    (item.email &&
                      item.email.toLowerCase().includes(search.toLowerCase()))
                  ) {
                    return item;
                  }
                })
                .map((prop) => {
                  return (
                    <div key={prop.id} className='channel-members'>
                      <img
                        key={prop.id}
                        src={`${avatar}avion-${prop.email}.svg`}
                        alt=''
                      />
                      {prop.email}
                    </div>
                  );
                })}
          </div>
          {ownerID && (
            <div className='add-member-modal'>
              <div className='container'>
                <i className='fa-regular fa-square-plus' />
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
              <div className='error'>{error}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberList;
