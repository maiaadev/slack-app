import React from 'react';
import { useNavigate } from 'react-router-dom';
import team from '../../assets/images/support-team.png';
import logo from '../../assets/images/logo.png';

function AccountCreated() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/sign-in');
  };
  return (
    <div className='account-created'>
      <div className='account-created-box'>
        <div className='box'>
          <div className='image'>
            <img src={team} alt='' />
          </div>
          <div className='message'>
            <div className='div'>
              <div className='welcome'>
                Welcome to <img src={logo} alt='' />
                Slack!
              </div>
              <div className='texts-modal'>
                A messaging app for teams, a place you can collaborate on
                projects and organize conversations — so you can work together,
                no matter where you are.
              </div>
              <div onClick={handleNavigate} className='login'>
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountCreated;
