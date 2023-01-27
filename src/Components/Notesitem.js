import React from "react";

const Notesitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      {/* {note.title}<br/>
      {note.description}<br/> */}

      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            officia dolor, repudiandae molestiae nihil eius non voluptate quod,
            laboriosam excepturi saepe adipisci amet quidem tempora deleniti
            nesciunt eveniet necessitatibus sint culpa, consectetur esse.
            Voluptate, itaque rem et corrupti obcaecati nostrum.
          </p>

          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
};

export default Notesitem;
