import React from 'react';

class AuthCallback extends React.Component {
  componentDidMount() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const code = params.get('code');
    if (code.length > 0) {
      localStorage.setItem('bnetAuth', code);
      this.props.changeAuthedStatus();
    }
  }

  render() {
    return (
      <div className="AuthCallback col-12">
        <h1>Successfully logged into battle.net</h1>
      </div>
    );
  }
}

export default AuthCallback;
