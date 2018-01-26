//section below the location form where user can view upcoming volunteer events.
import React from 'react';
import $ from 'jquery';
import '../css/BrowseEventsSection.css';

class BrowseEventsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // console.log("fetch results!!!");
    // console.log("fetch results!!!");
    // console.log("fetch results!!!");
    // console.log("fetch results!!!");
    // console.log("fetch results!!!");
    // this.fetchResults();
  }

  // fetchResults() {
  //   const filter = `filterByFormula=AND({City}='${this.props.city}')`
  //   const url = `https://api.airtable.com/v0/app9VPF6XSTZlqqva/Events?api_key=key4Z1WxfNWgWqpiO&${filter}`;
  //   console.log(url);
  //   $.ajax({
  //     url: `https://api.airtable.com/v0/app9VPF6XSTZlqqva/Events?api_key=key4Z1WxfNWgWqpiO&${filter}`
  //   })
  //   .done(function(data){
  //     console.log(data);
  //     this.props.setEventResults(data.records);
  //   }.bind(this));
  // }

  render() {
    console.log(this.props);
    const event_records = this.props.event_records;
    console.log(this.props.event_records);
    // if(this.props != "") {
    //     let filteredResults = event_records.map( (item)=>{
    //                                                           if(item.fields["City"]== this.props.city){
    //                                                             return item
    //                                                           }
    //                                                         }, []
    //                                               )
    //     console.log("Filtered ");
    //     console.log(filteredResults);
    // }

    return (
      <div>
        <h1> Browse Events </h1>
        <table>
              <tr>
                <td>Event Name</td>
                <td>City</td>
                <td>Description</td>
                <td>Date</td>
                <td>City</td>
                <td>State</td>
                <td>Type</td>
                <td>Contact Name</td>
                <td>Contact Email</td>
              </tr>
          {event_records.map((event_record) => {
            return (
              <tr>
                <td>{event_record.fields["Event Name"]}</td>
                <td>{event_record.fields["City"]}</td>
                <td>{event_record.fields["Description"]}</td>
                <td>{event_record.fields["Date"]}</td>
                <td>{event_record.fields["City"]}</td>
                <td>{event_record.fields["State"]}</td>
                <td>{event_record.fields["Type"]}</td>
                <td>{event_record.fields["Contact Name"]}</td>
                <td>{event_record.fields["Contact Email"]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    )
  }
}

export default BrowseEventsSection;
