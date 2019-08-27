import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Message.css';

const Message = ({ text }) => (
  <div className="Message">
    {text}
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;
