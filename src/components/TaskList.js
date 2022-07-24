import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  function DisplayTaskList() {
    return (tasks.map((task) => 
      <Task key = {task.text} category = {task.category} text = {task.text} handleDeleteTask = {deleteTask} />)
  )
}

  return (
    <div className="tasks">
      <DisplayTaskList />
    </div>
  );
}

export default TaskList;
