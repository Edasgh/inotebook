import React from 'react';


import { Link ,useLocation} from 'react-router-dom';

const Navbar = () => {
  let location=useLocation();
  // useEffect(()=>{
  //   console.log(location.pathname);
  // },[location])
  //WE DON'T NEED 'useEffect' HERE
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
{/*THE className="navbar-light" & "bg-light" REPRESENTS THE LIGHT THEME OF THE NAVIGATION BAR && REMOVE THE className="bg-body-tertiary" TO ENABLE THIS FEATURE*/}
    
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/notes'?"active":""}`} to="/notes">Notes</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname ==='/about'?"active":""}`} to="/about">About</Link>
        </li>
     
      </ul>
        <li className="nav-item">
        <Link className="nav-link btn btn-primary mx-1"  role="button" to="/signup" >Sign Up</Link>
        <Link className="nav-link btn btn-success mx-1"  role="button" to="/login" >Log In</Link>
        
        </li>
      <div className="form-check form-switch">
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked" style={{color:'white'}}/>
  <label className="form-check-label mx-2" htmlFor="flexSwitchCheckChecked"style={{color:'white'}}>Dark Mode</label>
</div>


    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
