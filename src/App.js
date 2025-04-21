// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/navbar';  // Navbar
import Home from './components/home';      // Home section
import About from './components/aboutme';  // About section
import Skills from './components/skills';  // 💡 Import Skills component
import Education from './components/education';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills /> {/* 🎯 Skills section appears after About */}
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
