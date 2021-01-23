import React from "react";
import "./App.css";
// import React, { useState } from 'react';

// import components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";


function App() {

  return (
    <div className="app">
      <div className="home">
        <Nav />
        <Tweets />
      </div>
    </div>
  );
}

export default App;