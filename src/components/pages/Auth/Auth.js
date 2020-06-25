import React from 'react';

import authData from '../../../helpers/data/authData';

import './Auth.scss';

class Auth extends React.Component {
  battleNetLogin = () => {
    const url = authData.getBattleNetAuthCode();
    window.location.href = url;
  }

  render() {
    return (
      <div className="Auth col-12">
        <h1>Auth</h1>
        <button className="btn btn-dark" onClick={this.battleNetLogin}><i className="fad fa-swords fa-3x"></i></button>
      </div>
    );
  }
}

export default Auth;
