/**
 * App Container
 */

import React from 'react';
import { hot } from 'react-hot-loader';

import AppComponent from '../components/App';

class App extends React.Component {
  render() {
    return (
      <AppComponent {...this.props} />
    );
  }
}

export default hot(module)(App);
