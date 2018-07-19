import React, { Component } from 'react';
import './meetup.css';

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Meetup">
        <form onSubmit={this.handleSubmit}>
            <input
              className="Date"
              type="date"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              className="Activity"
              type="text"
              placeholder="Activity"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              className="Link"
              type="text"
              placeholder="Link"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              className="Notes"
              type="text"
              placeholder="Notes"
              value={this.state.value}
              onChange={this.handleChange}
            />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Meetup;
