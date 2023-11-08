import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import '@radix-ui/themes/styles.css';
import { Theme} from '@radix-ui/themes';
import AddOOTD from "./components/addOOTD";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useState(() => {
    console.log('Notes array:', notes);
  }, [notes]);

  return (
    <div>
      
      <Theme>

      <Header />
      
      <AddOOTD onAdd={addNote}/>
      <div className ="note-grid">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              image={noteItem.image}
              date={noteItem.date}
              onDelete={deleteNote}
            />
          );
        })}
    </div>
      </Theme>
      <Footer />
    </div>
  );
}

export default App;
