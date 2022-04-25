import React, { useContext, useEffect, useRef } from 'react';
import UseContext from '../../context/UseContext';
import GetChannel from './GetChannel';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import CreateMessage from './CreateMessage';
import slackbot from '../../assets/images/slack-bot.png';

function SideBar() {
  const { isOpenMessageModal, setIsOpenMessageModal, userList, avatar } =
    useContext(UseContext);

  const slackbotRef = useRef();

  useEffect(() => {
    slackbotRef.current.focus();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='workspace'>
          Workspace
          <i className='fa-solid fa-angle-down' />
        </div>
        <div
          onClick={() => {
            setIsOpenMessageModal(true);
          }}
          className='white-circle'
        >
          <i className='fa-regular fa-pen-to-square' />
        </div>
      </div>
      <div className='sidebar-options-container'>
        <div className='sidebar-options'>
          <div className='sidebar-options-list'>
            <div className='list-options option-1'>
              <i className='fa-solid fa-bars' />
              <div className='option-name-1'>All unreads</div>
            </div>
            <div className='list-options option-2'>
              <i className='fa-solid fa-comment' />
              <div className='option-name-2'>Threads</div>
            </div>
            <div className='list-options option-3'>
              <i className='fa-solid fa-comments' />
              <div className='option-name-3'>All DMs</div>
            </div>
            <div className='list-options option-4'>
              <i className='fa-solid fa-at' />
              <div className='option-name-4'>Mentions & reactions</div>
            </div>
            <div className='list-options option-5'>
              <i className='fa-solid fa-file' />
              <div className='option-name-5'>Drafts</div>
            </div>
            <div className='list-options option-6'>
              <i className='fa-solid fa-ellipsis-vertical' />
              <div className='option-name-6'>More</div>
            </div>
          </div>
        </div>
      </div>
      <div className='channels'>
        <GetChannel />
      </div>
      <div className='direct-message'>
        <div className='dmessage'>
          <div className='dm-dropdown'>
            <i className='fa-solid fa-caret-down' />
            Direct Messages
          </div>
        </div>
        <div className='user-names'>
          <Link to='slack-bot' ref={slackbotRef} className='slack-bot'>
            <img src={slackbot} alt='' />
            Slackbot
          </Link>
          {userList.map((prop) => {
            if (userList !== null) {
              return (
                <div className='image'>
                  <img
                    className='avatar'
                    src={`${avatar}avion-${prop.email}.svg`}
                    alt=''
                  />
                  <Link key={prop.id} to={`${prop.id}`} className='user-list'>
                    {prop.email}
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>

      <Modal open={isOpenMessageModal}>
        <CreateMessage />
      </Modal>
    </div>
  );
}

export default SideBar;
