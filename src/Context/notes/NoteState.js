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
  const getAllNotes = async() => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
      },
      
      // body: JSON.stringify(), 
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);


    
  };

  //FUNCTION OF  Adding a note
  const addNote = async(title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", 
      
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
          
      },
      
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    console.log(json);

    console.log("New note");
    let note = {
      
        "user": process.env.USER_ID,
        "title": title,
        "description": description,
        "tag": tag,
        "_id": process.env.ID,
        "date": "2023-01-29T05:08:24.768Z",
        "__v": 0
      
    };
    setNotes(notes.concat(note));

    
  };
  //FUNCTION OF Deleting a note
  const deleteNote =async (id) => {
     //API CALL
     const response = await fetch(`${host}/api/notes/deleteanote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")


      },
      
      //body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    console.log("Deleted note with id" + id);

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNote);
  };

  //FUNCTION OF Editing a note

  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updateanote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);


    let newNotes=JSON.parse(JSON.stringify(notes))
    //Logic to edit note in client
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }

      setNotes(newNotes);
    }
  };

  return (
    //Boiler plate code of contextapi
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , getAllNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
