import React, { useContext } from 'react';
import UseContext from '../../context/UseContext';
import AddChannel from './AddChannel';
import GetChannel from './GetChannel';
import Modal from '../Modal';
import CreateMessage from './CreateMessage';
import { GetUsers } from '../../api/Fetch';
import { Link } from 'react-router-dom';
function SideBar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { createMessage, setCreateMessage, users, userList, search } =
    useContext(UseContext);

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='workspace'>{user.email}</div>
        {/* <i class='fa-solid fa-pen-to-square new-message' /> */}
      </div>
      <div className='channels'>
        <GetChannel />
      </div>
      <div className='direct-message'>
        <div className='dmessage'>
          <div className='dm-dropdown'>Direct Messages</div>
          <div
            onClick={() => {
              setCreateMessage(true);
            }}
            className='create-message'
          >
            <i className='fa-solid fa-pen-to-square'/>
          </div>
        </div>
        {userList &&
          userList
            .filter((item) => {
              if (
                search === '' ||
                (item && item.toLowerCase().includes(search.toLowerCase()))
              ) {
                return item;
              }
            })
            .map((prop) => {
              if (userList !== null) {
                return (
                  <Link to={`${prop}`} className='user-list'>
                    {prop}
                  </Link>
                );
              }
            })}
      </div>

      <Modal open={createMessage}>
        <CreateMessage />
      </Modal>
    </div>
  );
}

export default SideBar;
