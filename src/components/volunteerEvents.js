import React from 'react';
import LocationForm from './LocationForm';
import BrowseEventsSection from './BrowseEventsSection';

class VolunteerEvents extends React.Component {
render() {
  return(
    <div>
      <LocationForm/>
      <BrowseEventsSection/>
    </div>
  )
}
}

export default VolunteerEvents;
