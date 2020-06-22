import React from 'react';

// import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/auth';

import './Home.scss';

class Home extends React.Component {
  githubLogin = () => {
    authData.getGithubAuth()
      .then((resp) => console.log('github response: ', resp))
      .catch((err) => console.error('unable to auth with github: ', err));
  }

  battleNetLogin = () => {
    authData.getBattleNetAuth()
      .then((resp) => console.log('battle net response: ', resp))
      .catch((err) => console.error('unable to auth with github: ', err));
  }

  render() {
    return (
      <div className="Home col-12">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.githubLogin}><i className="fab fa-github fa-3x"></i></button>
        <button className="btn btn-dark" onClick={this.battleNetLogin}><i className="fad fa-swords fa-3x"></i></button>
      </div>
    );
  }
}

export default Home;
