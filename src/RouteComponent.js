// App.js
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './AppNavbar.css'; // Import the custom CSS file
import About from './About';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import JobSeeker from './jobSeeker.js';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container-fluid">
          <NavLink className="navbar-brand navbar-brand-custom" to="#">Your Logo</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* ... other nav-items ... */}
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/jobSeeker">Job Seeker</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link-custom" to="/contact">Contact</NavLink>
              </li>
              {/* ... other nav-items ... */}
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/jobSeeker" element={<JobSeeker />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add additional routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
