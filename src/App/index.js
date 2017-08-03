import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import '../spectre.min.css';

import Nav from '../Nav';
import Login from '../Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Nav auth={this.state.auth} />
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/discover" render={() => <h1>Discover</h1>} />
          <Route path="/create" render={() => <h1>Create</h1>} />
          <Route path="/login" render={() =>
              this.state.auth
              ? <Redirect to="/" />
              : <Login loginHandler={this.handleLogin} />} />
        </div>
      </Router>
    );
  }

  handleLogin() {
    this.setState({auth: true});
  }

}

export default App