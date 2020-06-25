import React from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import AuthCallback from '../components/pages/AuthCallback/AuthCallback';

class App extends React.Component {
  state = {
    authed: false,
  }

  changeAuthedStatus = () => {
    if (localStorage.bnetAuth && localStorage.bnetAuth.length > 0) {
      this.setState({ authed: true });
    } else {
      this.setState({ authed: false });
    }
  }

  PublicRoute = ({ component: Component, authed, ...rest }) => {
    const routeChecker = (props) => (authed === false
      ? (<Component {...props} changeAuthedStatus={this.changeAuthedStatus}/>)
      : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
    return <Route {...rest} render={(props) => routeChecker(props)} />;
  };

  PrivateRoute = ({ component: Component, authed, ...rest }) => {
    const routeChecker = (props) => (authed === true
      ? (<Component {...props} changeAuthedStatus={this.changeAuthedStatus}/>)
      : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
    return <Route {...rest} render={(props) => routeChecker(props)} />;
  };

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} changeAuthedStatus={this.changeAuthedStatus}/>
            <div className="row text-center">
              <Switch>
                <this.PrivateRoute path='/home' component={Home} authed={authed} />
                <this.PublicRoute path='/auth/bnet/callback' component={AuthCallback} authed={authed} />
                <this.PublicRoute path='/auth' component={Auth} authed={authed} />
                <Redirect from="*" to="/home"/>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
