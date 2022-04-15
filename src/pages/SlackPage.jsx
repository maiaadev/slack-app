import React from 'react';
import { Outlet } from 'react-router-dom';
import Main from '../components/slack-page/Main';
import NavBar from '../components/slack-page/NavBar';
import SideBar from '../components/slack-page/SideBar';

function SlackPage() {
  return (
    <div>
      <div className='slack-navbar'>
        <NavBar />
      </div>
      <div className='slack-main'>
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  );
}

export default SlackPage;
