import React from 'react';

const SortBySelector = ({ setSortingOption }) => {
  const handleSortingChange = (event) => {
    // console.log(event.target.value)
    setSortingOption(event.target.value);
  };

  
  return (
    <div className="sort-by-selector">
      <label>Sort By:</label>
      <select onChange={handleSortingChange}>
        <option value="Priority">Priority</option>
        <option value="Title">Title</option>
      </select>
    </div>
  );
};

export default SortBySelector;
