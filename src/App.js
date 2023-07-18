import React, { useState, useEffect } from 'react';
import GroupSelector from './GroupSelector';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import GroupInput from './GroupInput';
import './NoteApp.css';

const NoteApp = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('project-data');
    if (savedData) {
      const { savedGroups, savedNotes } = JSON.parse(savedData);
      setGroups(savedGroups);
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify({ savedGroups: groups, savedNotes: notes });
    localStorage.setItem('project-data', data);
  }, [groups, notes]);

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    const filteredNotes = notes.filter((note) => note.group === event.target.value);
    setNotes(filteredNotes);
  };

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleAddGroup = (newGroupName) => {
    if (!groups.includes(newGroupName)) {
      setGroups((prevGroups) => [...prevGroups, newGroupName]);
    }
  };

  return (
    <div className="note-app">
      <h1 className="note-app-title">Note Taking App</h1>
      <div className="note-app-content">
        <GroupSelector groups={groups} selectedGroup={selectedGroup} onGroupChange={handleGroupChange} />
        <NoteList notes={notes} />
        <NoteInput selectedGroup={selectedGroup} onAddNote={handleAddNote} />
        <GroupInput onAddGroup={handleAddGroup} />
      </div>
    </div>
  );
};

export default NoteApp;
