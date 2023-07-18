import React from 'react';
import './GroupSelector.css';

const GroupSelector = ({ groups, selectedGroup, onGroupChange }) => {
  return (
    <div className="group-selector">
      <label htmlFor="group" className="group-selector-label">Select Group:</label>
      <select id="group" className="group-selector-select" value={selectedGroup} onChange={onGroupChange}>
        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GroupSelector;
