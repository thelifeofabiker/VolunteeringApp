import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import VolunteerEvents from './components/VolunteerEvents';
import SubmitForm from './components/SubmitForm';
import ForOrganizers from './components/ForOrganizers';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Route exact path="/Home" component={ Homepage } />
        <Route path="/Volunteer-Events" component={ VolunteerEvents } />
        <Route path="/For-Organizers" component={ ForOrganizers } />
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector('#app') );
