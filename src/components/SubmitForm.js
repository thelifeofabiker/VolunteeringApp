import React from 'react';
import $ from 'jquery';


<div>
  <p>Let us know about your next event by submitting in the form below!</p>
  <p>Our partnerships in the communities help us get your event the most exposure and the most hands at your next event. </p>
</div>


class SubmitForm extends React.Component{
  createEvent(e) {
    e.preventDefault();
    // alert(this.nameInput.value);

    $.ajax({
      type: "POST",
      url: "https://api.airtable.com/v0/app9VPF6XSTZlqqva/Events?api_key=key4Z1WxfNWgWqpiO",
      data: {
        "fields": {
          "Event Name": this.nameInput.value,
          "Date": this.dateInput.value,
          "Description": this.descriptionInput.value,
          "Type": this.typeInput.value,
          "City": this.cityInput.value,
          "State": this.stateInput.value,
          "Contact Name": this.contactNameInput.value,
          "Contact Email": this.contactEmailInput.value,
        }
      },
      dataType: "json"
    }).done(function(data, _t, _x) {
      alert("Thank you for submitting your event!");
      this.resetFields();
    }.bind(this));
  }

  resetFields() {
    this.nameInput.value = null;
    this.dateInput.value = null;
    this.descriptionInput.value = null;
    this.typeInput.value = null;
    this.cityInput.value = null;
    this.stateInput.value = null;
    this.contactNameInput.value = null;
    this.contactEmailInput.value = null;
  }

  render() {
    return (

      <div>
        <p>Let us know about your next event by submitting in the form below!</p>
        <p>Our partnerships in the communities help us get your event the most exposure and the most hands at your next event. </p>


      <form id="inputForm" onSubmit={ (e) => { this.createEvent(e) } }>
        <fieldset>
          <legend>Add Event </legend>

          <p>
            <label htmlFor="name">Event Name:</label>
            <input type="text" name="name" id="name" ref={ (input) => { this.nameInput = input } }/>
          </p>
          <p>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" ref={ (input) => { this.dateInput = input } }/>
          </p>
          <p>
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" ref={ (input) => { this.cityInput = input } }/>
          </p>
          <p>
            <label htmlFor="state">State:</label>
            <input type="text" name="state" id="state" ref={ (input) => { this.stateInput = input } }/>
          </p>
          <p>
            <label htmlFor="description">Short Description:</label>
            <input type="text" name="description" id="description" ref={ (input) => { this.descriptionInput = input } }/>
          </p>
          <p>
            <label htmlFor="type">Type:</label>
            <input type="text" name="type" id="type" ref={ (input) => { this.typeInput = input } }/>
          </p>
          <p>
            <label htmlFor="contactName">Contact Name:</label>
            <input type="text" name="contactName" id="contactName" ref={ (input) => { this.contactNameInput = input } }/>
          </p>
          <p>
            <label htmlFor="contactEmail">Contact Email:</label>
            <input type="email" name="contactEmail" id="contactEmail" ref={ (input) => { this.contactEmailInput = input } }/>
          </p>
          <p>
            <input type="submit" name="save"/>
          </p>
        </fieldset>
      </form>

      </div>
    )
  }
}

export default SubmitForm;
