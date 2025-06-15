import React, { useState } from "react";
import NoteEditor from "../components/NoteEditor.jsx";
import NoteList from "../components/NoteList.jsx";
import NavBar from '../components/Navbar.js'

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const handleSave = (newNote) => {
    if (editingNote) {
      // Update existing note
      setNotes(notes.map(note => note.id === editingNote.id ? newNote : note));
      setEditingNote(null);
    } else {
      // Add new note
      setNotes([newNote, ...notes]);
    }
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  return (
    <>
    <NavBar/>
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="custom-serif text-4xl font-bold mb-6 text-center text-blue-700">📝 My Notes</h1>
      <NoteEditor 
        onSave={handleSave} 
        initialData={editingNote}
      />
      <NoteList 
        notes={notes} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </div>
    </>
  );
}