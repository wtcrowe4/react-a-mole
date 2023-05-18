import React from 'react';
import './App.css';

//Create splashescreen component
const SplashScreen = (props) => {
  return (
    <div className="SplashScreen">
      <h1>React-a-Mole</h1>
      <h2>Click on the mole to earn points, but don't miss or click on the same mole twice!</h2>
      <button onClick={props.handleClick}>Start Game</button>
    </div>
  );
}

export default SplashScreen;