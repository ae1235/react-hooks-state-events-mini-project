import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit, setCategoriesSelected}) {
  function DisplayCategoryOptions() {
    return (categories.map((category) => 
      {
      if(category.name !== "All") {
        return(<option key = {category.name} name = {category.name}>{category.name}</option>)
      }
      else {
        return null;
      }
    })
    )}

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("Code");

  function handleNewTaskText(event) {
    setNewTaskText(event.target.value);
  }

  function handleNewTaskCategory(event) {
    setNewTaskCategory(event.target.value);
  }

  function handleEnterNewTask(event) {
    event.preventDefault();
    const newTask = {
      text: newTaskText, 
      category: newTaskCategory
    }
  onTaskFormSubmit(newTask);
  setNewTaskText("");
  setNewTaskCategory("Code");

  setCategoriesSelected(null);
  return;
  }

  return (
    <form className="new-task-form" onSubmit = {handleEnterNewTask}>
      <label>
        Details
        <input type="text" name="text" value = {newTaskText} onChange = {handleNewTaskText} />
      </label>
      <label>
        Category
        <select name="category" value = {newTaskCategory} onChange={handleNewTaskCategory}>
        <DisplayCategoryOptions categories = {categories} />
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
