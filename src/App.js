import React, { useState } from 'react';
import './App.css';
import MoleContainer from './components/MoleContainer';

function App() {
  //Score state
  let [score, setScore] = useState(0);
  //Pause state
  let [paused, setPaused] = useState(false);
  
  const createMoleHills = () => {
    let moleHills = [];
    for (let i = 0; i < 9; i++) {
      moleHills.push(<MoleContainer key={i} setScore={setScore} score={score}/>);
    }
    return (<div className="moleHill">{moleHills}</div>); 
  }

  return (
    <div className="App">
      <h1>React-a-Mole</h1>
      <h2>{score}</h2>
      <button onClick={() => {setPaused(!paused)}}>{paused ? "Resume" : "Pause"}</button>
      {createMoleHills()}
    </div>
  );
}

export default App;
