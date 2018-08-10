import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/Quilly Logo - White.svg';

import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <p class="menu">Menu</p>
        {/* <Link to="/">Home</Link> */}
        <Link to="/">
          <img src={logo} id="sidebarLogo" alt="Home" />
        </Link>
        {/* Uncomment after Introductions is completed */}
        <Link to="/introductions">Introductions</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/meetups">Meetups</Link>
        <Link to="/contributions">Contributions</Link>
        <Link to="/resumes">Resumes</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/settings">Settings</Link>

      </div>
    );
  }
}

export default Sidebar;
