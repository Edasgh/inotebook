//Notes Component
import React, { useEffect} from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import Notesitem from "./Notesitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  // const{notes, setNotes}=context;
  const { notes, getAllNotes } = context;
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);



  return (
    <>
      <div>
        <AddNote />

       
          
        <h1>Your Notes</h1>
        <div className="row">
          {notes.map((note) => {
            //THE 'notes' [const (notes)] SET AS 'context'
            return <Notesitem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
