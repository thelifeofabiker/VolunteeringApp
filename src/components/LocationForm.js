//Form in the volunteerEvents page
import React from 'react';
import '../css/location-form.css'
class LocationForm extends React.Component {
  render() {
    return (
      <form className="location-form" onSubmit={(e) => this.getVolunteerLocation(e)}>
        <h1 className="form-title"> Search volunteer events near you</h1>
        <div>
          <label htmlFor="city">Enter city, state:</label>
          <input type="text" id="city" name="city" placeholder="ex: Los Angeles, CA"/>
        </div>
        <footer>
          <input type="submit" value="Find volunteer events"/>
        </footer>
      </form>
    )
  }
}
export default LocationForm;
