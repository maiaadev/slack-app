import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function NavBar() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate('/sign-in');
  };
  return (
    <div className='nav-bar'>
      <div className='side-left'>
        <div className='left'>
          <i className='fa-solid fa-circle red-circle' />
          <i className='fa-solid fa-circle yellow-circle' />
          <i className='fa-solid fa-circle green-circle' />
        </div>
        <div className='right'>
          <i className='fa-solid fa-arrow-left left-arrow' />
          <i className='fa-solid fa-arrow-right right-arrow' />
          <i className='fa-solid fa-clock-rotate-left history-icon'></i>
        </div>
      </div>
      <div className='middle'>
        <SearchBar />
      </div>
      <div className='side-right'>
        {/* <i className='fa-solid fa-circle-question help-icon'></i> */}
        <i className='fa-solid fa-user-tie avatar' />
        <i onClick={logOut} className='fa-solid fa-arrow-right-from-bracket' />
      </div>
    </div>
  );
}

export default NavBar;
