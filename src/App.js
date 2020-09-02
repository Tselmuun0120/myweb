import React from 'react';
import image1 from './image1.jpg';
import './App.scss';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={image1} className="App-image" alt="image" />
        <p>
          The people who are crazy enough to think they can change the world are the ones who do.
        </p>
        <h1>
          Timeline
        </h1>
      <span>24 Feb Steven Paul was born in San Francisco, the son of Abdulfattah Jandali and Joanne Schieble. 
          He is quickly adopted by Paul and Clara Jobs </span>
          <span>1969 Steve Jobs meets Steve Wozniak, 5 years older, through a mutual friend. Woz and Steve share a love of electronics, Bob Dylan, and pranks</span>
  
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
    </div>
   
  );
}

export default App;
