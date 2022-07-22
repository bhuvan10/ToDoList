import React from 'react'
import { ToDoItems } from './ToDoItems'

export const ToDo = (props) => {
  return (
    <div>   
      {props.todos.map((todo) => {
        return <ToDoItems todo={todo} key={todo.title} deleteOne={props.deleteOne} />;
      })}
    </div>
  );
}
