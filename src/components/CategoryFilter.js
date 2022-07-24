import React from "react";

function CategoryFilter({categories, filterTasksByCategory}) {
  function onFilterTasks(event) {
    filterTasksByCategory(event.target.name);
  }

  function DisplayCategoryButtons() {
    return (categories.map((category) => 
      <button key = {category.name} name = {category.name} className = {category.selected ? "selected" : ""} onClick = {(event)=>onFilterTasks(event)}>{category.name}</button>)
  )
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <DisplayCategoryButtons />
    </div>
  );
}

export default CategoryFilter;
