import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../../context/UseContext';
import { Link } from 'react-router-dom';

function GetChannels() {
  const {channels} = useContext(UseContext)
    
  return (
    <div>
      <div className='channel-dropdown'>
        <i className='fa-solid fa-caret-down' />
        Channels
      </div>
      <div className='channel-names'>
        <ul>
          {channels.map((prop) => {
            return <Link to={`${prop.name}`} className='channel-list'>{prop.name}</Link>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default GetChannels;
