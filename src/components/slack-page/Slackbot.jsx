import React from 'react';
import slackbot from '../../assets/images/slack-bot.png';

function Slackbot() {
  return (
    <div className='slack-bot-container'>
      <div className='slackbot-nav-bar'>
        <div className='nav-bar-top'>
          <div className='name'>
            <img src={slackbot} alt='slackbot' />
            <div className='title'>Slackbot</div>
            <i className='fa-solid fa-angle-down' />
          </div>
        </div>
        <div className='nav-bar-bottom'>
          <div className='container'>
            <i className='fa-solid fa-plus' />
            Add a bookmark
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='greetings'>Hi, Slackbot here!</div>
        <div className='grid'>
          <img src={slackbot} alt='slackbot' />
          <div className='body'>
            You're here! Hello!
            <br />
            <br />
            To learn all about using Slack, click the{' '}
            <i className='fa-regular fa-circle-question' /> help icon in the top
            right corner of the app. (Or, you can visit the{' '}
            <span>Help Center</span> on the web!)
            <br />
            <br />
            I, however, am not a human. Just a bot (a simple bot, with only a
            few tricks up my metaphorical sleeve). But I’m still happy you’re
            here!
          </div>
        </div>
        <div className='textarea'>
          <div className='container-top'>
            <div className='top-icon'>
              <i className='fa-solid fa-bold' />
              <i className='fa-solid fa-italic' />
              <i className='fa-solid fa-strikethrough' />
              <i className='fa-solid fa-link' />
              <i className='fa-solid fa-list-ol' />
              <i className='fa-solid fa-list-ul' />
              <i class="fa-solid fa-bars"></i>
              <i className='fa-solid fa-code' />
              <i className='fa-solid fa-laptop-code' />
            </div>
          </div>
          <textarea placeholder='Message Slackbot' />
          <div className='container-bottom'>
            <div className='left'>
            <i class="fa-solid fa-circle-plus"></i>
              <i className='fa-solid fa-video' />
              <i className='fa-solid fa-microphone' />
              <i className='fa-regular fa-face-smile' />
              <i className='fa-solid fa-at' />
              <i class="fa-solid fa-font"></i>
            </div>
            <div className='right'>
            <i class="fa-solid fa-paper-plane"></i>
              <i className='fa-solid fa-angle-down' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slackbot;
