import React from "react";
import { Link } from "react-router-dom";
// import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {
  return (
  <div className="container">
    <div>
      <h1>Login to Get Started</h1>
      <div className="container my-3">
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <Link className="nav-link btn btn-primary mx-1"  role="button" to="/signup" >Sign Up</Link>
          <Link className="nav-link btn btn-success mx-1"  role="button" to="/login" >Log In</Link>
        
        </form>
      </div>
        <h1 className="text-success d-flex justify-content-center">You're Already Logged In</h1>
    </div>
    <Notes/>
  </div>
  )

    
};

export default Home;
