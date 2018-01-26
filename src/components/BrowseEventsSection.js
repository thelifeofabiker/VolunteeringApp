//section below the location form where user can view upcoming volunteer events.
import React from 'react';
import $ from 'jquery';

class BrowseEventsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { event_records: [] };
  }

  componentDidMount() {
    $.ajax({
      url: "https://api.airtable.com/v0/app9VPF6XSTZlqqva/Events?api_key=key4Z1WxfNWgWqpiO"
    })
    .done(function(data){
      this.setState({
        event_records: data.records
      });
    }.bind(this));
  }

  render() {
    const event_records = this.state.event_records;

    return (
      <div>
        <h1> Browsing some volunteer events </h1>
        <table>
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
