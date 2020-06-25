import React from 'react';

// import { Link } from 'react-router-dom';
import './Home.scss';
import authData from '../../../helpers/data/authData';
import userInfoData from '../../../helpers/data/userInfoData';

class Home extends React.Component {
  state = {
    bnetToken: {},
    battleTag: '',
  }

  getProfile = (accessToken, battleTag) => {
    userInfoData.getProfile(accessToken, battleTag)
      .then((profile) => console.error(profile.data))
      .catch((err) => console.error('unable to find your profile: ', err));
  };

  componentDidMount() {
    authData.getBattleNetToken()
      .then((resp) => {
        localStorage.setItem('bnetToken', JSON.stringify(resp.data));
        this.setState({ bnetToken: resp.data });
        authData.getBattleTag(resp.data.access_token).then((resp2) => {
          const battleTag = resp2.data.battletag;
          localStorage.setItem('battleTag', JSON.stringify(battleTag));
          this.setState({ battleTag });
          this.getProfile(resp.data.access_token, battleTag);
        });
      }).catch((err) => console.error('unable to get battle net token: ', err));
  }

  render() {
    const { battleTag } = this.state;
    return (
      <div className="Home col-12">
        <h1>Home</h1>
        <h2>Welcome {battleTag}</h2>
      </div>
    );
  }
}

export default Home;
