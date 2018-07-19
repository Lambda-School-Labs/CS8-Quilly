import React, { Component } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';

class Contributionspage extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Breadcrumbs />
      </div>
    );
  }
}

export default Contributionspage;