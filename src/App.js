import React from "react";
import "./App.css";
// import React, { useState } from 'react';

// import components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";


function App() {

  const name = 'developed';
  const age = 26;

  return (
    <div className="app">
      <div className="home">
        <Nav />
        <Tweets me={name} age={age} />
      </div>
    </div>
  )
}

export default App;