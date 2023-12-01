import React from 'react';
import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall'
import eightBallMsg from './Questions';
function App() {
  return (
    <div className="App">
      <EightBall answers={eightBallMsg} />
    </div>
  );
}

export default App;
