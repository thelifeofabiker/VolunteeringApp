import React from 'react';
import LocationForm from './LocationForm';
import BrowseEventsSection from './BrowseEventsSection';
import PropTypes from 'prop-types';
import $ from 'jquery';

class VolunteerEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      event_records: []
    }
    this.getEventResults = this.getEventResults.bind(this);
    this.setEventResults = this.setEventResults.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }
  getEventResults(result){
    this.setState({
      city: result
    })
    console.log(result);
  }

  setEventResults(results) {
    this.setState({
      event_records: results
    });
    console.log("...");
    console.log(results);
  }

  fetchResults(result) {
    this.setState({
      city: result
    })
    console.log(result);

    const filter = `filterByFormula=AND({City}='${result}')`
    const url = `https://api.airtable.com/v0/app9VPF6XSTZlqqva/Events?api_key=key4Z1WxfNWgWqpiO&${filter}`;
    console.log(url);
    $.ajax({
      url: `https://api.airtable.com/v0/app9VPF6XSTZlqqva/Events?api_key=key4Z1WxfNWgWqpiO&${filter}`
    })
    .done(function(data){
      console.log(data);
      this.setEventResults(data.records);
    }.bind(this));
  }

  render() {
    return(
      <div>
        <div className="image-events"></div>
        <LocationForm
          fetchResults= {this.fetchResults}
        />
        <BrowseEventsSection
          searchCity= {this.state.city}
          event_records={ this.state.event_records }
          setEventResults={ this.setEventResults }
        />
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
