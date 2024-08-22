import { useState } from "react";
import Note from "./components/Note";

const App = ({ notesList }) => {
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState(notesList);
  const [newNote, setNewNote] = useState("add new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  //: notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    // console.log("Add New Note: ", Math.random() < 0.5);
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
    // console.log("Add New Note: ", newNote);
  };

  const handleNoteChange = (event) => {    
    // console.log("button clicked", event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h2>Notes</h2>
      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        {!showAll ? "Show All" : "Show Filtered"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
