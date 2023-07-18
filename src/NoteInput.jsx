import React, { useState } from 'react';
import './NoteInput.css';

const NoteInput = ({ selectedGroup, onAddNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const currentDateTime = new Date().toLocaleString();
      const newNoteItem = {
        group: selectedGroup,
        content: newNote,
        createdAt: currentDateTime,
        updatedAt: currentDateTime,
      };

      onAddNote(newNoteItem);
      setNewNote('');
    }
  };

  return (
    <div className="note-input">
      <input
        type="text"
        value={newNote}
        onChange={handleNoteChange}
        placeholder="Enter Note"
        className="note-input-text"
      />
      <button onClick={handleAddNote} className="note-input-button">Add Note</button>
    </div>
  );
};

export default NoteInput;
