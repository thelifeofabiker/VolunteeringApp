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
<<<<<<< HEAD
        <NavigationBar/>
        <Route exact path="/Home" component={ Homepage } />
=======
        <NavBar/>
        <Route exact path="/" component={ Homepage } />
>>>>>>> 0f24a17cbfa691beb3e39745d3d1dce55dcd8f8b
        <Route path="/Volunteer-Events" component={ VolunteerEvents } />
        <Route path="/For-Organizers" component={ SubmitForm } />
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector('#app') );
