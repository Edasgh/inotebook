import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = (props) => {
 
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };



  const [credentials, setCredentials] = useState({name:"" ,email: "", password: "", cpassword:"" });
  let history = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
     const  {name, email, password} = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken); // json.authtoken : was showing error cause it was undefined, I 
      //saved it as 'authToken'
      history("/");
      //history.push("/") was not working : It was showing errors
      props.showAlert(" : Account Created Successfully","success")



    } else {
     props.showAlert(" : Invalid Details","danger")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };



  return (
    <div className="my-4">
      <h2>Create an Account on iNotebook to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            minLength={3}
            onChange={onChange}
          required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
             required/>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={isShown ? "text" : "password"}
            className="form-control"
            name="password"
            id="password"
            minLength={8}
            onChange={onChange}
             required/>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={isShown}
            onChange={togglePassword}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Show Password
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type={isShown ? "text" : "password"}
            className="form-control"
            name="cpassword"
            id="cpassword"
            minLength={8}
            onChange={onChange}
              required/>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck2"
            checked={isShown}
            onChange={togglePassword}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Show Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
