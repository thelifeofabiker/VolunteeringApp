import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import VolunteerEvents from './components/VolunteerEvents';
import SubmitForm from './components/SubmitForm';
import ForOrganizers from './components/ForOrganizers';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
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
        <Route exact path="/Home" Component={ Homepage } />
        <Route path="/Volunteer-Events" Component={ VolunteerEvents } />
        <Route path="/For-Organizers" Component={ ForOrganizers } />
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector('#app') );
