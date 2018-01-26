import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css'
import logo from '../img/HHlogo.png';

const NavBar = () => {
    return (
      <nav>

        <div className="allItems">
          <div className="link logo">
          </div>
          <div className="link">
            <Link to="/For-Organizers">For Organizers</Link>
          </div>
          <div className="link">
            <Link to="/Volunteer-Events">Volunteer Events</Link>
          </div>
          <div className="link">
            <Link to="/">Home</Link>
          </div>
        </div>

      </nav>
    )
  }

export default NavBar;
