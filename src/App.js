// import React from "react";
import "./App.css";
import React, { useState } from 'react';

// import components
import Nav from "./components/Nav";
import Video from "./components/Video";


function App() {

  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  const toggler = () => {
    setToggle(prev => !prev);
  }

  return (
    <div className="app">
      <div className="home">
        <h1 className={toggle ? 'active' : ""}>nematomas</h1>
        <h2>counter {counter}</h2>
        <button onClick={incrementer}>click</button>
        <button onClick={toggler}>toggle</button>
        <Nav setToggle={setToggle} />
        <Video nr={counter} />
        {/* <Nav />
        <Tweets /> */}
      </div>
    </div>
  );
}

export default App;