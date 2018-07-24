import React from 'react';
import '../css/master.css';
import events from './VolunteerEvents.js'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="mySlides">

        </div>


        <div className="goEvents">
          <h2>Helping Hands transforms volunteer recruiting, making it quick, <br /> easy and effective.</h2>
          <button className="button" type="button" name="button"><a href="/Volunteer-Events">See Events</a></button>
        </div>

        <div className="image"></div>

        <div className="aboutUs">
          <p>Helping Hands is the most effective way to recruit highly qualified volunteers for your nonprofit. We match you with people who are passionate about and committed to your cause, and who can help when and where you need them.
          <br />
          <br />
          We believe everyone should have the chance to make a difference. That's why we make it easy for good people and good causes to connect. We've connected millions of people with a great place to volunteer and helped tens of thousands of organizations better leverage volunteers to create real impact.</p>
        </div>

      </div>
    )
  }
}

export default HomePage;
