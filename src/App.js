// import React from "react";
import "./App.css";
import React, { useState } from 'react';

// import components
// import Nav from "./components/Nav";
// import Tweets from "./components/Tweets";


function App() {

  const [counter, setCounter] = useState(0)

  const incrementer = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
  }

  return (
    <div className="app">
      <div className="home">
        <h2>counter {counter}</h2>
        <button onClick={incrementer}>click</button>
        {/* <Nav />
        <Tweets /> */}
      </div>
    </div>
  );
}

export default App;