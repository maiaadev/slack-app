import React from 'react';
import Logo from './Logo';
import Globe from './Globe';
import Button from './Button'

function StartPage() {
  return (
    <div className='start-page'>
      <div className='start'>
        <div className='text'>
          <div className='up'>
           <Logo/>
            <div className='slogan'>
              Slack brings the team together wherever you are
            </div>
            <Button/>
            <div className='texts'>
              We'll take you to your web browser to sign in and then bring you
              back here.
            </div>
          </div>
          <div className='down'>
            Is your team new to Slack?
            <a href='#'>Create a new workspace</a>
          </div>
        </div>
        <Globe />
      </div>
    </div>
  );
}

export default StartPage;
