import React from 'react';




class SubmitForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

      "Event Name": "Wyncode Cleanup 1",
      "Date": "2018-01-29",
      "Description": "Start to help",
      "City": "Miami",
      "State": "FL",
      "Type": "Social",
      "Contact Email": "johnsmith@gmail.com",
      "Contact Name": "John Smith"
    };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }






  render() {
    return (
      <form id="inputForm" class="" action="index.html" method="post">
        <fieldset>
          <legend>Add Event </legend>

          <p>
            <label for="name">Event Name:</label>
            <input type="text" name="name" id="name"/>
          </p>
          <p>
            <label for="date">Date:</label>
            <input type="date" name="date" id="date"/>
          </p>
          <p>
            <label for="location">Location:</label>
            <input type="location" name="location" id="location"/>
          </p>
          <p>
            <label for="description">Short Description:</label>
            <input type="text" name="description" id="description"/>
          </p>
          <p>
            <label for="email">Contact Email:</label>
            <input type="email" name="email" id="email"/>
          </p>
          <p>
            <input type="submit" name="save"/>
          </p>
        </fieldset>
      </form>
    )
  }
}

export default SubmitForm;
