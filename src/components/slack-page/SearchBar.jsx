import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../../context/UseContext';
import { Link } from 'react-router-dom';

function SearchBar() {
  const {
    setSearch,
    setIsOpenSearchModal,
    searchRef,
    userList,
    search,
    channels,
  } = useContext(UseContext);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const input = () => {
    if (search === '') {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    input();
  }, [search]);

  return (
    <div className='search-modal'>
      <div className='search-container'>
        <i
          onClick={() => {
            setIsOpenSearchModal(false);
            setSearch('');
          }}
          className='fa-solid fa-xmark close'
        />
        <div className='top'>
          <i className='fa-solid fa-magnifying-glass' />
          <input
            ref={searchRef}
            className='search'
            type='text'
            placeholder='Type what you want to search for'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />{' '}
        </div>
        {open ? (
          <div className='main'>
            <div className='find'>
              <i className='fa-solid fa-list' />
              Find in Workspace
            </div>
            <div className='search-options'>
              <div className='top'>I'm looking for...</div>
              <div className='bottom'>
                <div className='option'>
                  <i className='fa-solid fa-comments' />
                  Messages
                </div>
                <div className='option'>
                  <i className='fa-solid fa-layer-group' />
                  Files
                </div>
                <div className='option'>
                  <i className='fa-solid fa-rectangle-list' />
                  Channels
                </div>
                <div className='option'>
                  <i className='fa-solid fa-user-group' />
                  People
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='open'>
            <div className='channel-container'>
              <div className='option'>
                <i className='fa-solid fa-rectangle-list' />
                Channels
              </div>
              <div className='channel-list-container'>
                {channels &&
                  channels
                    .filter((item) => {
                      if (
                        search === '' ||
                        (item.name &&
                          item.name
                            .toLowerCase()
                            .includes(search.toLowerCase()))
                      ) {
                        return item;
                      }
                    })
                    .map((prop) => {
                      return (
                        <Link
                          onClick={() => {
                            setIsOpenSearchModal(false);
                          }}
                          to={`${prop.id}`}
                          key={prop.id}
                          className='channel-list'
                        >
                          {prop.name}
                        </Link>
                      );
                    })}
              </div>
            </div>

            <div className='user-list-container'>
              <div className='option'>
                <i className='fa-solid fa-user-group' />
                People
              </div>
              {userList &&
                userList
                  .filter((item) => {
                    if (
                      search === '' ||
                      (item &&
                        item.email.toLowerCase().includes(search.toLowerCase()))
                    ) {
                      return item;
                    }
                  })
                  .map((prop) => {
                    if (userList !== null) {
                      return (
                        <Link
                          onClick={() => {
                            setIsOpenSearchModal(false);
                          }}
                          key={prop.id}
                          to={`${prop.id}`}
                          className='user-list'
                        >
                          {prop.email}
                        </Link>
                      );
                    }
                  })}
            </div>
          </div>
        )}
        <div className='bottom'>
          <div className='text-bottom'>
            Not the result you expected? <span>Give feedback</span> or{' '}
            <span>learn more</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
