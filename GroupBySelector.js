import React from 'react';

const GroupBySelector = ({ setGroupingOption }) => {
  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
  };

  return (
    <div className="group-by-selector">
      <label>Group By:</label>
      <select onChange={handleGroupingChange}>
        <option value="Status">Status</option>
        <option value="User">User</option>
        <option value="Priority">Priority</option>
      </select>
    </div>
  );
};


export default GroupBySelector;
