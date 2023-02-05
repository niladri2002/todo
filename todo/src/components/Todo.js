import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine, RiDeleteBin3Line, RiDeleteBin6Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Addtodo from './Addtodo';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [update, isupdate] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  
  const submitUpdate = value => {
    console.log("editid"+edit.id)
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

 

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <h1>{todo.text}</h1>
        {todo.desc}
      </div>
      <div className='icons'>
        <RiDeleteBin6Line
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
           onClick={() => setEdit({ id: todo.id, value: todo.text })}
         
          className='edit-icon'
        />
       
      </div>
    </div>
  ));
};

export default Todo;