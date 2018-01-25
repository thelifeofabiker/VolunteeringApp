import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <div>
          <Link to="/Home">Home</Link>
        </div>
        <div>
          <Link to="/Volunteer-Events">Volunteer Events</Link>
        </div>
        <div>
          <Link to="/For-Organizers">For Organizers</Link>
        </div>
      </nav>
    )
  }

export default NavBar;
