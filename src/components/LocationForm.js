//Form in the volunteerEvents page
import React from 'react';
import '../css/location-form.css';
import PropTypes from 'prop-types';
// import {history} from 'react-router-dom';

class LocationForm extends React.Component {
  getVolunteerLocation(event){
    event.preventDefault();
    const locationId = this.locationFormInput.value;
    if(locationId === "") {
      alert("Please enter: city, state");
    }
    else {
      const educational = this.props.city;
      this.props.getEventResults(educational);

    let path = `/volunteerLocation/${locationId}`;
    // this.props.history.push(path);
    }
  }
  render() {
    return (
      <form className="location-form" onSubmit={(e) => this.getVolunteerLocation(e)}>
        <h1 className="form-title"> Search volunteer events near you</h1>
        <div>
          <label htmlFor="city">Enter city, state:</label>
          <input type="text" id="city" name="city" placeholder="ex: Los Angeles, CA" ref={(input) => this.locationFormInput = input}/>
        </div>
        <footer>
          <input type="submit" value="Find volunteer events"/>
        </footer>
      </form>
    )
  }
}

LocationForm.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.objectisRequired
}

export default LocationForm;
