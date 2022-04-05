import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/sign-in');
  };

  return (
    <button onClick={handleNavigate} className='sign-in'>
      Sign In to Slack
    </button>
  );
}

export default Button;
