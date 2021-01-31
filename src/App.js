// import React from "react";
import "./App.css";
import React, { useState } from 'react';




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
      {todos.map((todo, index) =>
        <div className="todo-list">
          <Todo
            index={index}
            todo={todo}
          ></Todo>
        </div>
      )}
    </div>
  );
}

export default App;