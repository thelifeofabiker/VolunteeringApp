import React from 'react';
import LocationForm from './LocationForm';
import BrowseEventsSection from './BrowseEventsSection';
import PropTypes from 'prop-types';

class VolunteerEvents extends React.Component {
  getEventResults(){
    console.log("I work!")
  }
  render() {
    return(
      <div>
        <LocationForm
          getEventResults= {this.getEventResults}
        />
        <BrowseEventsSection/>
      </div>
    )
  }

}

VolunteerEvents.propTypes = {
  city: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}
export default VolunteerEvents;
