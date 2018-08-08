import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config/config';
import './meetup.css';

axios.defaults.withCredentials = true;

class Meetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverData: [],
      date: '',
      activity: '',
      link: '',
      notes: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${config.serverUrl}/user/meetups`)
      .then(response => {
        this.setState({ serverData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let serverPort = {
      date: this.state.date,
      activity: this.state.activity,
      link: this.state.link,
      notes: this.state.notes
    };

    axios
      .post(`${config.serverUrl}/user/meetups/add`, serverPort)
      .then((res) => {
        console.log(res);
        let temp = this.state.serverData;
        temp.push(serverPort);
        this.setState({ serverData: temp });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="MeetupComponents">
        <div className="meetups">
          {/* Displaying over user's meetups -- will display nothing if no input given */}
          {this.state.serverData.map(function (meetup) {
            return (
              <div className="meetupsData">
                <div className="date">{meetup.date.slice(0, 10)}</div>
                <div className="activity">{meetup.activity}</div>
                <div className="link">
                  <a href={meetup.link}>
                    <span role="img" aria-label="link emoji">
                      &#x1f517;
                    </span>
                  </a>
                </div>
                <div className="notes">{meetup.notes}</div>
              </div>
            );
          })}
        </div>
        {/* Form Component */}
        <div className="MeetupForm">
          <form onSubmit={this.handleSubmit} className="FormSubmit">
          <i className="far fa-calendar-alt"></i>
            <input
              className="formDate"
              required="true"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              className="formActivity"
              type="text"
              placeholder="Meetup"
              required="true"
              name="activity"
              value={this.state.activity}
              onChange={this.handleChange}
            />
            <input
              className="formLink"
              type="text"
              placeholder="Link &#x1f517;"
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
            <input
              className="formNotes"
              type="text"
              placeholder="Notes"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Meetup;
