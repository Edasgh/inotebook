// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, 
  Routes,
   Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";
import Notes from "./Components/Notes";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  return(
  <>
  <NoteState> 
  <Router>
  <Navbar/>
  <Alert message="Alert of iNotebook will look like this"/>
  <div className="container">
   <Routes>
    <Route exact path="/notes" element={<Notes/>}></Route>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/about" element={ <About/>}></Route>
    <Route exact path="/signup" element={<Signup/>}></Route>
    <Route exact path="/login" element={<Login/>}></Route>
   </Routes>
  </div>
  </Router>
  </NoteState>
  </>
  )
}

export default App;
