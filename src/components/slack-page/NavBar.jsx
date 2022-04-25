import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseContext from '../../context/UseContext';
import Modal from '../Modal';
import SearchBar from './SearchBar';

function NavBar() {
  const navigate = useNavigate();
  const {
    setChannels,
    setUserList,
    isOpenSearchModal,
    setIsOpenSearchModal,
    avatar,
  } = useContext(UseContext);

  const [toggle, setToggle] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'));
  
  const logOut = () => {
    setChannels([]);
    setUserList([]);
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
        <button
          onClick={() => {
            setIsOpenSearchModal(true);
          }}
          className='search-button'
        >
          <i className='fa-solid fa-magnifying-glass' />
          Search Workspace
        </button>
      </div>
      <div className='side-right'>
        <img
          className='avatar'
          src={`${avatar}avion-${user.email}.svg`}
          alt=''
          onMouseLeave={() => {setToggle(!toggle)}}
          onMouseEnter={() => {setToggle(!toggle)}}
        />
        <i onClick={logOut} className='fa-solid fa-arrow-right-from-bracket' />
        {toggle && <div className="toggle">{user.email}</div>}
      </div>
      <Modal open={isOpenSearchModal}>
        <SearchBar />
      </Modal>
    </div>
  );
}

export default NavBar;
