import React from "react";
import { useContext } from "react";

import noteContext from "../Context/notes/noteContext";


const Notesitem = (props) => {
  const {note ,updateNote} = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  
  
  return (
    <>
    <div className="col-md-3">
      <div className="card my-3 mx-2">
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            {note.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-primary"
              style={{ marginLeft: "-31px" }}
            >
              {note.tag}
            </span>
            {/* <span className="badge text-bg-primary" style={{ marginLeft: "-30px" }}>{note.tag}</span> */}
          </h5>
          <p className="card-text">{note.description}</p>
         
          <i
            className="fa-solid fa-trash mx-2"
            style={{ color: "rgb(228 69 69)" }}
            onClick={() => {
              deleteNote(note._id);
              props.showAlert(" : Deleted Successfully","success")
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            style={{ color: "rgb(6, 149, 149)" }}
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
    </>
  );
};

export default Notesitem;
