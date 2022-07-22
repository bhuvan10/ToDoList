import React, { useState } from "react";

export const AddToDo = (props) => {
    const [title,settitle]=useState("");
    const [desc,setdesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
if(!title||!desc)
   alert("title or description not added");
   else
   {
    props.addItem(title,desc);
    settitle("");
    setdesc("");
   }
    }
  return (
    <div className="container text-start my-3">
      <h3>Add a TO DO</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            To DO Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>setdesc(e.target.value)}

          />
        </div>
    
        <button type="submit"  className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
