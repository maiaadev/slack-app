import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/slack-page/NavBar';
import SideBar from '../components/slack-page/SideBar';

function SlackPage() {
  
  return (
    <div className='main-page'>
      <div className='slack-navbar'>
        <NavBar />
      </div>
      <div className='slack-main'>
        <SideBar/>
        <Outlet />
      </div>
    </div>
  );
}

export default SlackPage;
