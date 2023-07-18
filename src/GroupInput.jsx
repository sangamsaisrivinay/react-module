import React, { useState } from 'react';
import './GroupInput.css';

const GroupInput = ({ onAddGroup }) => {
  const [newGroupName, setNewGroupName] = useState('');

  const handleInputChange = (event) => {
    setNewGroupName(event.target.value);
  };

  const handleAddClick = () => {
    if (newGroupName.trim() !== '') {
      onAddGroup(newGroupName);
      setNewGroupName('');
    }
  };

  return (
    <div className="group-input">
      <input
        type="text"
        value={newGroupName}
        onChange={handleInputChange}
        placeholder="Enter Group Name"
        className="group-input-text"
      />
      <button onClick={handleAddClick} className="group-input-button">Add Group</button>
    </div>
  );
};

export default GroupInput;
