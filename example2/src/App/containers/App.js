/**
 * App Container
 */

import React from 'react';
import { hot } from 'react-hot-loader';

import AppComponent from '../components/App';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.hanldeRegistration = this.hanldeRegistration.bind(this);
  }

  hanldeRegistration(e) {
    this.setState({ });
    alert(e);
  }

  render() {
    return (
      <AppComponent
        handleSubmit={this.hanldeRegistration}
        {...this.props} />
    );
  }
}

export default hot(module)(App);
