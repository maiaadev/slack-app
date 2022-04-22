import React, { useContext } from 'react';
import UseContext from '../../context/UseContext';
import GetChannel from './GetChannel';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import CreateMessage from './CreateMessage';

function SideBar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { isOpenMessageModal, setIsOpenMessageModal, userList, search } =
    useContext(UseContext);

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='workspace'>{user.email}</div>
      </div>
      <div className='channels'>
        <GetChannel />
      </div>
      <div className='direct-message'>
        <div className='dmessage'>
          <div className='dm-dropdown'>Direct Messages</div>
          <div
            onClick={() => {
              setIsOpenMessageModal(true);
            }}
            className='create-message'
          >
            <i className='fa-solid fa-pen-to-square' />
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
                  <Link key={prop.id} to={`${prop.id}`} className='user-list'>
                    {prop.email}
                  </Link>
                );
              }
            })}
      </div>

      <Modal open={isOpenMessageModal}>
        <CreateMessage />
      </Modal>
    </div>
  );
}

export default SideBar;
