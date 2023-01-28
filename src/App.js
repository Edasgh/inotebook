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

function App() {
  return(
  <>
  <NoteState> 
  <Router>
  <Navbar/>
  <Alert message="Alert of iNotebook will look like this"/>
  <div className="container">
   <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/about" element={ <About/>}></Route>
   </Routes>
  </div>
  </Router>
  </NoteState>
  </>
  )
}

export default App;
