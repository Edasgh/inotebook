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
  const getAllNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      //"POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjZTk2MzMzZGMxNTJhMzhhNzViNDQ0In0sImlhdCI6MTY3NDU1NjI5NH0.u_73kPQUexF_COWAvwHMq8sAVZfW34Mc0IZApqXd00s",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json)

    //FUNCTION OF  Adding a note
    const addNote = async (title, description, tag) => {
      console.log("New note");
      //API call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMzg1NzhkNDA2ODI4NGJkODQ4ZjhjIn0sImlhdCI6MTY3NDkwMzQyN30.KELIPvFZ5SenfUIDPinBRX5dQ-O63v1Z9WZQmtPgcis",
        },

        body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
      });
      //const json = response.json(); // parses JSON response into native JavaScript objects

      // let note = {
      //   _id: "63d38689d4068284bd848f7890",
      //   user: "63d38578d4068284bd848f7c",
      //   title: title,
      //   description: description,
      //   tag: tag,
      //   date: "2023-01-27T08:08:41.890Z",
      //   __v: 0,
      // };
      //setNotes(notes.push(note)); ||'.concat()' returns a new array where '.push()' updates an array
      // setNotes(notes.concat(note));
    };

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
      const response = await fetch(`${host}/api/notes/updateanote/${id}`, {
        method: "POST",

        //"PUT",
        headers: {
          "Content-Type": "application/json",

          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMzg1NzhkNDA2ODI4NGJkODQ4ZjhjIn0sImlhdCI6MTY3NDkwMzQyN30.KELIPvFZ5SenfUIDPinBRX5dQ-O63v1Z9WZQmtPgcis",
        },

        body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
      });
      const json = response.json(); // parses JSON response into native JavaScript objects

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
        value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
      >
        {props.children}
      </NoteContext.Provider>
    );
  };
};
export default NoteState;
