import React from 'react'

export const ToDoItems = ({todo,deleteOne}) => {
  return (
    
    <div  className='container text-start'>
           <h1>{todo.title}</h1>
           <p>{todo.description}</p>
           <button className='btn btn-danger' onClick={()=>deleteOne(todo)}>Delete</button>
           </div> 
  )
}
