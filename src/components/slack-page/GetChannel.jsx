import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../../context/UseContext';
import { Link } from 'react-router-dom';

function GetChannels() {
  const { channels, search } = useContext(UseContext);

  return (
    <div>
      <div className='channel-dropdown'>
        {/* <i className='fa-solid fa-caret-down' /> */}
        Channels
      </div>
      <div className='channel-names'>
        <ul>
          {channels && channels
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
    </div>
  );
}

export default GetChannels;
