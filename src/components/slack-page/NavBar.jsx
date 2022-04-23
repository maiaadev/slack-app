import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UseContext from '../../context/UseContext';
import Modal from '../Modal';
import SearchBar from './SearchBar'

function NavBar() {
  const navigate = useNavigate();
  const { setChannels, setUserList, userDetails, isOpenSearchModal, setIsOpenSearchModal } = useContext(UseContext);

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
        <button onClick={() => {setIsOpenSearchModal(true)}}className='search-button'>Search </button>
      </div>
      <div className='side-right'>
        <i className='fa-solid fa-user-tie avatar' />
        <i onClick={logOut} className='fa-solid fa-arrow-right-from-bracket' />
      </div>
      <Modal open={isOpenSearchModal}>
        <SearchBar/>
      </Modal>
    </div>
  );
}

export default NavBar;
