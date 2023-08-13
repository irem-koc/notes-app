import React from "react";
import { useSelector } from "react-redux";

const NoteList = () => {
    const notes = useSelector((state) => state.note.notes);
    const color = useSelector((state) => state.note.activeColor);
    return (
        <div>
            {notes.map((note,i) => (
                <h1 style={{color: note.color}} key={note.id}>{note.title}</h1>
            ))}
        </div>
    );
};

export default NoteList;
