import React, { useState } from 'react';
import Tweet from "./Tweet";


function App() {

  const [isBlue, setBlue] = useState(false);
  const blue = () => {
    setBlue(!isBlue);
  }
  const [users, setUsers] = useState([
    { name: 'Tommy', message: 'hey whats up' },
    { name: 'Jacky', message: 'la la la' }
  ])

  return (
    <div className='main'>
      {users.map(user => (
        <Tweet title={user.name} message={user.message} />
      ))}
      <h1 className={isBlue ? "blue" : ""}>Change color</h1>
      <button onClick={blue}>change</button>
    </div>
  )
}

export default App;