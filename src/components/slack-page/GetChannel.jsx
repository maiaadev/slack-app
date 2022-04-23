import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../../context/UseContext';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import AddChannel from './AddChannel';

function GetChannels() {
  const { channels, search, isOpenChannelModal, setIsOpenChannelModal } =
    useContext(UseContext);

  return (
    <div>
      <div className='channel-dropdown'>
        <div className='channel-title'>Channels</div>
        <i
          onClick={() => {
            setIsOpenChannelModal(true);
          }}
          className='fa-solid fa-plus add-icon'
        />
      </div>
      <div className='channel-names'>
        <ul>
          {channels.map((prop) => {
                return (
                  <Link
                    to={`${prop.id}`}
                    key={prop.id}
                    className='channel-list'
                  >
                    {prop.name}
                  </Link>
                );
              })}
        </ul>
      </div>
      <Modal open={isOpenChannelModal}>
        <AddChannel />
      </Modal>
    </div>
  );
}

export default GetChannels;
