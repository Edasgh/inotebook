import React from "react";
// import AddNote from "./AddNote";
import { Link, useNavigate } from "react-router-dom";
import Notes from "./Notes";

const Home = (props) => {
  const {showAlert}=props;
  let history=useNavigate();
  return (
    <div className="container">
      <div>

     {/* <div>
      <Link className="d-flex justify-content-center my-1 nav-link mx-1" style={{fontSize:'2.8rem' , fontWeight:'bold' , color:'#4a4747'}} to="/login" >Login to Get Started</Link>
      </div> */}
      
      { !localStorage.getItem("token")?<div>
      <Link className="d-flex justify-content-center my-1 nav-link mx-1" style={{fontSize:'2.8rem' , fontWeight:'bold' , color:'#4a4747'}} to="/login" >Log in/Sign up  to Get Started</Link>
      </div>:<div>
        <h1 className="text-success d-flex justify-content-center my-4">
          You're Already Logged In
        </h1>
      </div>}
      {/* <div>
        <h2 className="text-success d-flex justify-content-center my-4">
          You're Already Logged In
        </h2>
      </div> */}  
        <div className="d-flex justify-content-center my-5">
        {localStorage.getItem("token") && <button className="btn btn-secondary mx-1" onClick={()=>{
          localStorage.removeItem("token");
          props.showAlert(" : Logged Out Successfully","success");
          history("/")
        }}>Log Out</button>}
        </div>
        <hr />
      </div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
