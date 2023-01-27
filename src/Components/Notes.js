//Notes Component
import React from 'react';
import { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import Notesitem from './Notesitem';


const Notes = () => {
    const context=useContext(noteContext);
    const{notes, setNotes}=context;

  return (
    <>
     <div>
      <h1>Your Notes</h1>
      <div className="row">
      {notes.map((note)=>{//THE 'notes' [const (notes)] SET AS 'context'
        return <Notesitem note={note}/>
      })}
      </div>
    </div> 
    </>
  )
}

export default Notes
