import React from 'react';
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='side-left'>
        <div className='left'>
          <i class='fa-solid fa-circle'></i>
          <i class='fa-solid fa-circle'></i>
          <i class='fa-solid fa-circle'></i>
        </div>
        <div className='right'>
          <i class='fa-solid fa-arrow-left'></i>
          <i class='fa-solid fa-arrow-right'></i>
          <i class='fa-solid fa-clock-rotate-left'></i>
        </div>
      </div>
      <div className='middle'>
        <SearchBar />
      </div>
      <div className='side-right'>
        <i class='fa-solid fa-circle-question'></i>
        <i class='fa-solid fa-user-tie'></i>
      </div>
    </div>
  );
}

export default NavBar;
