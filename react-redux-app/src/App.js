import React from 'react';
import './App.css';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
    <section>
      {/* <video muted autoplay loop src={require("./smoke.mp4")}></video> */}
      <h1>
        <span>K</span>
        <span>A</span>
        <span>N</span>
        <span>Y</span>
        <span className="span5">E</span>

        <span>W</span>
        <span>E</span>
        <span>S</span>
        <span>T</span>
      </h1>
    </section>
     <Quotes />
    </div>
  );
}

export default App;
