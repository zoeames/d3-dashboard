import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = 'monkeybutt67';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home col-12">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
