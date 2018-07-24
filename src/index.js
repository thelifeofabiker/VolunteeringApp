import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// my files
import Homepage from './components/HomePage';
import NavBar from './components/NavBar';
import VolunteerEvents from './components/VolunteerEvents';
import SubmitForm from './components/SubmitForm';

class Root extends React.Component {
  render() {
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
};

ReactDOM.render( <Root />, document.getElementById('app') );
