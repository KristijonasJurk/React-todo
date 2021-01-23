import React, { useState } from 'react';
import Tweet from "./Tweet";


function App() {

  const [isBlue, setBlue] = useState(false);


  return (
    <div className='main'>
      <Tweet title='Tom' />
      <Tweet title='Nigelo' />
      <Tweet title='Jacky' />
      <Tweet title='Brian' />
      <h1>Change color</h1>
      <button></button>
    </div>
  )
}

export default App;