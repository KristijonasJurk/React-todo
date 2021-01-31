// import React from "react";
import "./App.css";
import React, { useState } from 'react';

function Todo({ todo, index }) {
  return (
    <div style={{
      textDecoration: todo.isComplete ? 'line-through' : ''
    }}>
      { todo.text}
      < div >
        <button>delete</button>
        <button>complete</button>
      </div >
    </div >
  )
}


function App() {
  const [todos, setTodos] = useState(
    {
      text: 'hellooooo',
      isComplete: false
    },
    {
      text: 'byeeeeeee',
      isComplete: false
    },
    {
      text: 'hiiiiiiiii',
      isComplete: false
    }
  )


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;