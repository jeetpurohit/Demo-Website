import React from "react";
import "./index.css";
import { Home, About, Project, Contact } from './routes'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>

    
  );
}

export default App;
