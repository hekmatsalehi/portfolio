import React, { useState } from 'react'


import Navbar from "./components/Navbar.js/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/ProjectsContainer";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import NavMenu from './components/NavMenu/NavMenu';
import './App.scss'


function App() {
const [showNavMenu, setShowNavMenu] = useState(false)


  return (
    <div className="app-wrapper">
      <Navbar showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu}/>
      <NavMenu showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu}/>
      <div className="container">
        <About />
        <Projects />
        <Contact />
        <Resume />
      </div>
    </div>
  );
}

export default App;
