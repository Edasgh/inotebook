//Notes Component
import React, { useState ,useEffect ,useContext, useRef} from "react";
import noteContext from "../Context/notes/noteContext";
import Notesitem from "./Notesitem";
import AddNote from "./AddNote";
//FOR THE MODAL(SPECIALLY)-FROM 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";




const Notes = () => {
  const context = useContext(noteContext);
  // const{notes, setNotes}=context;
  const { notes, getAllNotes , editNote} = context;
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [note, setNote]=useState({id:"" ,etitle:"",edescription:"",etag:""})//CHANGING THE 'name' 
  const ref=useRef(null);

  const updateNote=(currentNote)=>{
    ref.current.click();
    setNote({id:currentNote._id ,etitle:currentNote.title, edescription:currentNote.description , etag:currentNote.tag});
  }

  
    const handleClick=(e)=>{
        e.preventDefault();//Page will not be reloaded if backend is not found after submitting
    //addNote(note.title , note.description , note.tag);
     editNote(note.id , note.etitle , note.edescription, note.etag)
    setShow(false);
    }
    const onChange=(e)=>{
    setNote({...note, [e.target.name]: e.target.value})//AS WE ARE CHANGING 'name' HERE,SO WE ARE SETTING 'name' TO THE 'value' HERE
    }

  return (
    <>
      <div>
      <AddNote />
        <Button ref={ref} variant="primary" onClick={handleShow} style={{display:'none'}}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body><form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="etitle"
              id="etitle"
              value={note.etitle}
              onChange={onChange}
              />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea 
            className="form-control"
            id="edescription"
            name="edescription"
            value={note.edescription}
            onChange={onChange}
           >
             </textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              name="etag"
              value={note.etag}
              onChange={onChange}
            />
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close & Undo
          </Button>
          <Button  variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <h1 className="my-3"><Link className="nav-link" to="/notes">Your Notes</Link></h1>
        <div className="row">
          <div>
          {notes.length === 0 && <h2 className="text-primary d-flex justify-content-center">No Notes to show</h2>}
          </div>
          {notes.map((note) => {
            //THE 'notes' [const (notes)] SET AS 'context'
            return <Notesitem key={note._id} note={note} updateNote={updateNote} />;
          })}
        </div>
       


      </div>
    </>
  );
};

export default Notes;
