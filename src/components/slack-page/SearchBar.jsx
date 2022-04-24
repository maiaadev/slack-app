import React, { useContext, useEffect } from 'react';
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

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className='search-modal'>
      <div className='search-container'>
        <i
          onClick={() => {
            setIsOpenSearchModal(false);
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />{' '}
        </div>
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
        <div className='bottom'>
          <div className='text-bottom'>
            Not the result you expected? <span>Give feedback</span> or{' '}
            <span>learn more</span>
          </div>
        </div>
        {/* <div className='search-options'>
          <div className='channels-search'>
            <div className='title'>
              <i className='fa-solid fa-hashtag'></i>Channels
            </div>
            <div className='channel-container'>
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
          </div>
          <div className='users'>
            <div className='title'>
              <i className='fa-solid fa-user-group'></i>People
            </div>
            <div className='user-list-container'>
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
        </div>
        <i
          onClick={() => {
            setIsOpenSearchModal(false);
          }}
          className='fa-solid fa-xmark'
        />
        <i className='fa-solid fa-magnifying-glass search-icon' />
      </div> */}
      </div>
    </div>
  );
}

export default SearchBar;
