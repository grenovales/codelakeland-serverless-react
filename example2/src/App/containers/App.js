/**
 * App Container
 */

import React from 'react';
import { hot } from 'react-hot-loader';
// import axios from 'axios';

import AppComponent from '../components/App';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      Message: ''
    };

    this.hanldeRegistration = this.hanldeRegistration.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  hanldeRegistration(e) {
    e.preventDefault();
    alert(e.email);
    this.setState({
      isModalOpen: true,
      Message: 'Thanks!! We will notify you!'
    });
    /* axios({
      method: 'POST',
      url: 'https://kea6qyg2ji.execute-api.us-east-1.amazonaws.com/v1/registration',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        address: e.email
      }
    })
      .then(() => {
        this.setState({
          isModalOpen: true,
          Message: 'Thanks!! We will notify you!'
        });
      })
      .catch(() => {
        this.setState({
          isModalOpen: true,
          Message: 'Something went wrong :('
        });
      }); */
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <AppComponent
        OpenModal={this.state.isModalOpen}
        handleSubmit={this.hanldeRegistration}
        closeModal={this.handleCloseModal}
        ModalMessage={this.state.Message}
        {...this.props} />
    );
  }
}

export default hot(module)(App);
