import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
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

  const notesInitial=[
    {
      "_id": "63d38653d4068284bd848f93",
      "user": "63d38578d4068284bd848f8c",
      "title": "Second note of mine",
      "description": "please do like my fb page carefully hahahahahaha",
      "tag": "school",
      "date": "2023-01-27T08:07:47.803Z",
      "__v": 0
    },
    {
      "_id": "63d38689d4068284bd848f95",
      "user": "63d38578d4068284bd848f8c",
      "title": "Very Important Note 2023",
      "description": "I have to practice coding everyday",
      "tag": "work",
      "date": "2023-01-27T08:08:41.890Z",
      "__v": 0
    },
    {
      "_id": "63d38689d4068284bd848f95",
      "user": "63d38578d4068284bd848f8c",
      "title": "Very Important Note 2023",
      "description": "I have to practice coding everyday",
      "tag": "work",
      "date": "2023-01-27T08:08:41.890Z",
      "__v": 0
    },
    {
      "_id": "63d38689d4068284bd848f95",
      "user": "63d38578d4068284bd848f8c",
      "title": "Very Important Note 2023",
      "description": "I have to practice coding everyday",
      "tag": "work",
      "date": "2023-01-27T08:08:41.890Z",
      "__v": 0
    },
    {
      "_id": "63d38689d4068284bd848f95",
      "user": "63d38578d4068284bd848f8c",
      "title": "Very Important Note 2023",
      "description": "I have to practice coding everyday",
      "tag": "work",
      "date": "2023-01-27T08:08:41.890Z",
      "__v": 0
    },
    {
      "_id": "63d38689d4068284bd848f95",
      "user": "63d38578d4068284bd848f8c",
      "title": "Very Important Note 2023",
      "description": "I have to practice coding everyday",
      "tag": "work",
      "date": "2023-01-27T08:08:41.890Z",
      "__v": 0
    },
    {
      "_id": "63d38689d4068284bd848f95",
      "user": "63d38578d4068284bd848f8c",
      "title": "Very Important Note 2023",
      "description": "I have to practice coding everyday",
      "tag": "work",
      "date": "2023-01-27T08:08:41.890Z",
      "__v": 0
    },
    {
      "_id": "63d38689d4068284bd848f95",
      "user": "63d38578d4068284bd848f8c",
      "title": "Very Important Note 2023",
      "description": "I have to practice coding everyday",
      "tag": "work",
      "date": "2023-01-27T08:08:41.890Z",
      "__v": 0
    }
  ]

  const[notes, setNotes] =useState(notesInitial);
    return(
        //Boiler plate code of contextapi
        <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;