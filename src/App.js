// import React, { useState } from 'react';
// import Tweet from "./Tweet";

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
  )
}

export default App;