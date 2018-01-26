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
      this.props.fetchResults(locationId);

    let path = `/volunteerLocation/${locationId}`;
    // this.props.history.push(path);
    }
  }
  render() {
    return (
      <form className="location-form" onSubmit={(e) => this.getVolunteerLocation(e)}>
        <h1 className="form-title"> Search for volunteer events near you</h1>
        <div>
          <label htmlFor="city">Enter City:</label>
          <input type="text" id="city" name="city" placeholder="ex: Los Angeles" ref={(input) => this.locationFormInput = input}/>
        </div>
        <div>
          <input type="submit" value="Find volunteer events"/>
        </div>
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
