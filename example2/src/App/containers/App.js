/**
 * App Container
 */

import React from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';

import AppComponent from '../components/App';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      Message: '',
      emailValue: ''
    };

    this.hanldeRegistration = this.hanldeRegistration.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  hanldeRegistration(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'https://kea6qyg2ji.execute-api.us-east-1.amazonaws.com/v1/registration',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        address: this.state.emailValue
      }
    })
      .then(() => {
        this.setState({
          isModalOpen: true,
          Message: 'Thanks!! We will notify you!',
          emailValue: ''
        });
      })
      .catch(() => {
        this.setState({
          isModalOpen: true,
          Message: 'Something went wrong :('
        });
      });
  }

  handleEmailChange(e) {
    this.setState({
      emailValue: e.target.value
    });
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
        EmailChange={this.handleEmailChange}
        email={this.state.emailValue}
        {...this.props} />
    );
  }
}

export default hot(module)(App);
