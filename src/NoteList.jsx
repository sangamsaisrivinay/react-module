import React from 'react';
import './NoteList.css';

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      <h2 className="note-list-title">Notes</h2>
      {notes.map((note, index) => (
        <div key={index} className="note-item">
          <p className="note-item-group">Group: {note.group}</p>
          <p className="note-item-content">Content: {note.content}</p>
          <p className="note-item-date">Created At: {note.createdAt}</p>
          <p className="note-item-date">Updated At: {note.updatedAt}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
