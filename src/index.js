import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
//TODO need to double check navbar

import VolunteerEvents from './components/VolunteerEvents';
import SubmitForm from './components/SubmitForm';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar/>
        <Route exact path="/Home" component={ Homepage } />
        <Route path="/Volunteer-Events" component={ VolunteerEvents } />
        <Route path="/For-Organizers" component={ SubmitForm } />
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector('#app') );
