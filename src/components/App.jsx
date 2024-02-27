import React, { useState } from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
import CreateArea from './CreateArea';

function App() {
    //notes array
    const [notes, setNotes] = useState([]);

    function addNewNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index != id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNewNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />);
            })}

            <Footer />
        </div>
    );
}

export default App;