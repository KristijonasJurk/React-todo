// import React from "react";
import "./App.css";
import React, { useState } from 'react';

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>
      {todo.text}
      < div >
        <button onClick={() => deleteTodo(index)}>delete</button>
        <button onClick={() => completeTodo(index)}>complete</button>
      </div >
    </div >
  )
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
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
  ])

  function addTodo(text) {
    const newTodo = [...todos, { text }]
    setTodos(newTodo)
  }

  function deleteTodo(index) {
    const newTodo = [...todos];
    newTodo[index].isComplete = true;
    setTodos(newTodo)
  }
  function completeTodo(index) {
    const newTodo = [...todos];
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