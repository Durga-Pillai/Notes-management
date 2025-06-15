import React from 'react';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Notes</h2>
      
      {notes.length === 0 ? (
        <p className="text-gray-500 italic">No notes yet. Create your first note!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div 
              key={note.id} 
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {note.title}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Note
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 whitespace-pre-wrap">
                {note.content}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(note.createdAt).toLocaleString()}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => onEdit(note)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(note.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;