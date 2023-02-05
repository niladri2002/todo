import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import addtodo from "./components/TodoList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <>
   
    <div className='todo-app'>
      <TodoList />
    </div>
</>
   
  );
}

export default App;