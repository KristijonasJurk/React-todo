// import React from "react";
import "./App.css";
import React, { useState } from 'react';

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{
      textDecoration: todo.isComplete ? 'line-through' : ''
    }}>
      {todo.text}
      < div >
        <button onClick={deleteTodo}>delete</button>
        <button onClick={completeTodo}>complete</button>
      </div >
    </div >
  )
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) { return; }
    addTodo(value)
    setValue('')
  }
  requestAnimationFrame(
    <form onSubmit={handleSubmit}>
      <input type="text" />
    </form>
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

  function addTodo(text) {
    const newTodo = [...todos, { text }]
    setTodos(newTodo)
  }

  function deleteTodo(index) {
    const newTodo = [...todo];
    newTodo[index].isComplete = true;
    setTodos(newTodo)
  }
  function completeTodo(index) {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodos(newTodo)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <TodoForm
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;