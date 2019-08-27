import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StartScreen.css';

const StartScreen = ({ onStartGame, gameOver }) => (
  <div className="StartScreen">
    { gameOver ? <h1>GAME OVER! Start a new one?</h1> : <h1>DRAGONS OF MUGLOAR</h1> }
    <img src="/images/start.png" alt="start" width="500px" height="320px" onClick={() => onStartGame()}></img>
  </div>
);

StartScreen.defaultProps = {
  gameOver: false
};

StartScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired,
  gameOver: PropTypes.bool
};

export default StartScreen;
