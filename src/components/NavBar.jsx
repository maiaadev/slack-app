import React from 'react';
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='side-left'>
        <div className='left'>
          <i class='fa-solid fa-circle red-circle'></i>
          <i class='fa-solid fa-circle yellow-circle'></i>
          <i class='fa-solid fa-circle green-circle'></i>
        </div>
        <div className='right'>
          <i class='fa-solid fa-arrow-left left-arrow'></i>
          <i class='fa-solid fa-arrow-right right-arrow'></i>
          <i class='fa-solid fa-clock-rotate-left history-icon'></i>
        </div>
      </div>
      <div className='middle'>
        <SearchBar />
      </div>
      <div className='side-right'>
        <i class='fa-solid fa-circle-question help-icon'></i>
        <i class='fa-solid fa-user-tie avatar'></i>
      </div>
    </div>
  );
}

export default NavBar;
