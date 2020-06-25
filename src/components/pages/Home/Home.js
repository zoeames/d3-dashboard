import React from 'react';

// import { Link } from 'react-router-dom';
import './Home.scss';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    bnetToken: {},
    battleTag: '',
  }

  componentDidMount() {
    authData.getBattleNetToken()
      .then((resp) => {
        localStorage.setItem('bnetToken', JSON.stringify(resp.data));
        this.setState({ bnetToken: resp.data });
        authData.getBattleTag(resp.data.access_token).then((resp2) => {
          localStorage.setItem('battleTag', JSON.stringify(resp2.data.battletag));
          this.setState({ battleTag: resp2.data.battletag });
        });
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
