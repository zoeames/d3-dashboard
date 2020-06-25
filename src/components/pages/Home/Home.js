import React from 'react';

// import { Link } from 'react-router-dom';
import './Home.scss';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    bnetToken: {},
  }

  componentDidMount() {
    authData.getBattleNetToken()
      .then((resp) => {
        console.log('token response', resp.data);
        localStorage.setItem('bnetToken', JSON.stringify(resp.data));
        this.setState({ bnetToken: resp.data });
      }).catch((err) => console.error('unable to get battle net token: ', err));
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
