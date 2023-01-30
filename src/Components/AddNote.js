import React,{useContext, useState} from "react";
import noteContext from '../Context/notes/noteContext';


const AddNote = () => {
    const context=useContext(noteContext);
    // const{notes, setNotes}=context;
    const{addNote}=context;

    const [note, setNote]=useState({title:"",description:"",tag:""})//CHANGING THE 'name' 
  
    const handleAddNote=(e)=>{
        e.preventDefault();//Page will not be reloaded if backend is not found after submitting
    addNote(note.title , note.description , note.tag);
    setNote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
    setNote({...note, [e.target.name]: e.target.value})//AS WE ARE CHANGING 'name' HERE,SO WE ARE SETTING 'name' TO THE 'value' HERE
    }
  return (
    <>
      <h2>Add a note</h2>

      <div className="container my-3">
      <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={note.title}
              onChange={onChange}
              minLength={3}
              required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea 
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required>
             </textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
               onChange={onChange}
               />
          </div>
          <button disabled={note.title.length<3 || note.description.length<5 } type="submit" className="btn btn-success" onClick={handleAddNote}>
            Add Note
          </button>
        </form>

      </div>
    </>
  );
};

export default AddNote;
