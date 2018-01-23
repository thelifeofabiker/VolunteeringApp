import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import './css/main.css';
import VolunteerEvents from './components/VolunteerEvents';


render( <VolunteerEvents/>, document.querySelector('#location-form') );
