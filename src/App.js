import React from 'react';
import './App.css';
import { NewNoteModel } from './components/NoteModel';
import NotesTable from './components/NotesTable';

function App() {
  return (
    <div className="App">
      <h3>Notes Application</h3>
      <div style={{maxWidth: '70%', margin: 'auto'}}>
        <div style={{textAlign: 'right'}}>
          <NewNoteModel />
        </div>
        <NotesTable/>
      </div>
    </div>
  );
}

export default App;
