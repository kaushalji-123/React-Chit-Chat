import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVideo,faBars } from '@fortawesome/free-solid-svg-icons'; // Fixed typo here
import { Messages } from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcon">
        <FontAwesomeIcon className='icon' icon={faVideo} />
        <FontAwesomeIcon className='icon' icon={faUser} />
        <FontAwesomeIcon className='icon' icon={faBars} />
        </div>
      </div>
      <Messages></Messages>
      <Input/>
    </div>
  );
};

export default Chat;
