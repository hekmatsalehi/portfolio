import Navbar from "./components/Navbar.js/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import './App.scss'


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
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
