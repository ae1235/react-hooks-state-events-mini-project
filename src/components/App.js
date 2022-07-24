import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTasks] = useState(TASKS);
  const [tasksToDisplay, setTasksToDisplay] = useState(tasks);

  function onTaskFormSubmit(newTask) {
    const newTaskList = [...tasks, newTask]
    setTasks(newTaskList);
    setTasksToDisplay(newTaskList);
  }

  function deleteTask(taskName) {
    const newTaskList = tasks.filter((task) => {
      if(task.text !== taskName) {
        return true;
      }
      else {
        return false;
      }
    })

  setTasks(newTaskList);
  setTasksToDisplay(newTaskList);
  }

  const categoriesWithSelected = CATEGORIES.map((category)=>{
      return(
        {
        name: category, 
        selected: false
        }
      )
  })

  const [categories, setCategories] = useState(categoriesWithSelected);

  function filterTasksByCategory(categoryName) {
    let taskList;

    taskList = tasks.filter((task) => {
      if(categoryName === "All" || task.category === categoryName) {
        return true;
      }
      else {
        return false;
      }
    })

  setTasksToDisplay(taskList);

  setCategoriesSelected(categoryName);
  }

  function setCategoriesSelected(categoryName) {
    const newCategories = categories.map((category) => {
      return {
        name: category.name, 
        selected: category.name === categoryName ? true : false
      }
    }
    )
    setCategories(newCategories);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {categories} filterTasksByCategory = {filterTasksByCategory} />
      <NewTaskForm categories = {categories} onTaskFormSubmit = {onTaskFormSubmit} setCategoriesSelected = {setCategoriesSelected}/>
      <TaskList tasks = {tasksToDisplay} deleteTask = {deleteTask}/>
    </div>
  );
}

export default App;
