import React, { useContext } from 'react';
import UseContext from '../../context/UseContext';
import AddChannel from './AddChannel';
import GetChannel from './GetChannel';

function SideBar() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='workspace'>{user.email}</div>
        {/* <i class='fa-solid fa-pen-to-square new-message' /> */}
      </div>
      <div className='channels'>
        <GetChannel />
        <AddChannel />
      </div>
      <div className='direct-message'>
        <div className='dm-dropdown'>
          {/* <i className='fa-solid fa-caret-down' /> */}
          Direct Messages
        </div>
        <div className='dm'>Sample</div>
      </div>
    </div>
  );
}

export default SideBar;
