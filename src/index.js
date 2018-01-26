import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import VolunteerEvents from './components/VolunteerEvents';
import SubmitForm from './components/SubmitForm';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Route exact path="/" component={ Homepage } />
        <Route path="/Volunteer-Events" component={ VolunteerEvents } />
        <Route path="/For-Organizers" component={ SubmitForm } />
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector('#app') );
