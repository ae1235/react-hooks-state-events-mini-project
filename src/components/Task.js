import React from "react";

function Task({category, text, handleDeleteTask}) {
  function deleteTask(event){
    handleDeleteTask(event.target.name);
  } 


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick = {deleteTask} name = {text}>X</button>
    </div>
  );
}

export default Task;
