import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../../context/UseContext';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import AddChannel from './AddChannel';

function GetChannels() {
  const { channels, search, isOpenChannelModal, setIsOpenChannelModal } =
    useContext(UseContext);

  return (
    <div className='channel-container'>
      <div className='channel-dropdown'>
        <div className='channel-title'>
          <i className='fa-solid fa-caret-down'></i>Channels
        </div>
      </div>
      <div className='channel-names'>
        <ul>
          {channels.map((prop) => {
            return (
              <Link to={`${prop.id}`} key={prop.id} className='channel-list'>
                <i className='fa-solid fa-lock'></i>
                {prop.name}
              </Link>
            );
          })}
          <div
            onClick={() => {
              setIsOpenChannelModal(true);
            }}
            className='add-channels'
          >
            <i className='fa-solid fa-square-plus'></i>Add Channels
          </div>
        </ul>
      </div>
      <Modal open={isOpenChannelModal}>
        <AddChannel />
      </Modal>
    </div>
  );
}

export default GetChannels;
