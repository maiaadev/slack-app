import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../../context/UseContext';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import AddChannel from './AddChannel';

function GetChannels() {
  const { channels, search, addChannel, setAddChannel } = useContext(UseContext);

  return (
    <div>
      <div className='channel-dropdown'>
        <div className='channel-title'>Channels</div>
      <i onClick={() => {setAddChannel(true)}}className="fa-solid fa-plus add-icon"/>
      </div>
      <div className='channel-names'>
        <ul>
          {channels &&
            channels
              .filter((item) => {
                if (
                  search === '' ||
                  (item.name &&
                    item.name.toLowerCase().includes(search.toLowerCase()))
                ) {
                  return item;
                }
              })
              .map((prop) => {
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
      <Modal open={addChannel}>
        <AddChannel/>
      </Modal>
    </div>
  );
}

export default GetChannels;
