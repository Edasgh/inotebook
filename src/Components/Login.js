import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken); // json.authtoken : was showing error cause it was undefined, I 
      //saved it as 'authToken'
      props.showAlert(" : Logged In Successfully","success")
      
      history("/");
      //history.push("/") was not working : It was showing errors
    } else {
      props.showAlert(" : Invalid Details","danger")

    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  return (
    <div className="my-4">
      <h2>Log In to your Account on iNotebook to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            //I didn't set the 'name' tags and that's why I got errors at first at input 'onChange' functions
          />
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
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <div className="mb-3 form-check ">
          <input
            type="checkbox"
            className="form-check-input"
            id="passcheck"
            checked={isShown}
            onChange={togglePassword}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Show Password
          </label>
        </div>

        <button type="submit" className="btn btn-success">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
