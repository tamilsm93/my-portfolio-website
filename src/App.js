import  React, {useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Content from './Content.js';

import './Navbar.js'
import Navbar from './Navbar.js';
import Skils from './Skils.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Skils />
      <Projects />
      <Contact />
      </div>
  );
}

export default App;
