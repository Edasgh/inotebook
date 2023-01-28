import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  //FOR UNDERSTANDING 'NoteContext' & 'NoteState'
  //    const s1={
  //       "name":"Eshita",
  //       "class":"12A"
  //    }
  //  const[state,setState]= useState(s1);
  //  const update=()=>{
  //   setTimeout(()=>{
  //     setState({
  //       "name":"Rama",
  //       "class":"BA3"
  //     })
  //   },1000)
  //  }
  //REAL CODE STARTS HERE

  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  //FUNCTION OF 'Getting all notes'
 
    //FUNCTION OF  Adding a note
    const addNote = (title, description, tag) => {
      console.log("New note");
     let note={
        "_id": "63d38653d4068284bd848f93",
        "user": "63d38578d4068284bd848f8c",
        "title": title,
        "description":description,
        "tag": tag,
        "date": "2023-01-27T08:07:47.803Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
     
      //API call
    }
    //FUNCTION OF Deleting a note
    const deleteNote = (id) => {
      //TODO: API call
      console.log("Delete note with id" + id);
      const newNote = notes.filter((note) => {
        return note._id !== id;
      });

      setNotes(newNote);
    };

    //FUNCTION OF Editing a note

    const editNote = async (id, title, description, tag) => {
      //API call
      //Logic to edit note in client
      for (let i = 0; i < notes.length; i++) {
        const element = notes[i];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    };

    return (
      //Boiler plate code of contextapi
      <NoteContext.Provider
        value={{ notes, addNote, deleteNote, editNote}}
      >
        {props.children}
      </NoteContext.Provider>
    );
  
};
export default NoteState;
