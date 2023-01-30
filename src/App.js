// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, 
  Routes,
   Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";
import Notes from "./Components/Notes";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);

    }


  return(
  <>
  <NoteState> 
  <Router>
  <Navbar showAlert={showAlert}/>
  <Alert alert={alert}/>
  <div className="container">
   <Routes>
    <Route exact path="/notes" element={<Notes/>}></Route>
    <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
    <Route exact path="/about" element={ <About/>}></Route>
    <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
    <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
   </Routes>
  </div>
  </Router>
  </NoteState>
  </>
  )
}

export default App;
