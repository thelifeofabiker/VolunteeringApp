import React from 'react';
import '../css/navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="inav">
        <img src="./applogo.png" alt="app logo" />
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./volunteerEvents.html">Volunteer Events</a></li>
          <li><a href="./submitEvent">Submit Event</a></li>
        </ul>
      </nav>
    );
  }
}

export deafault NavBar;
