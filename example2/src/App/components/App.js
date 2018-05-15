/**
 * App
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles/App.css';

import bckVideo from './videos/bg.mp4';
import posterImg from './images/bg-mobile-fallback.jpg';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

/* eslint jsx-a11y/media-has-caption: 0 */
const App = (props) => {
  const {
    OpenModal,
    ModalMessage,
    handleSubmit,
    closeModal,
    EmailChange,
    email
  } = props;

  return (
    <div>
      <video poster={posterImg} className="background-video" loop autoPlay>
        <source src={bckVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
      <div className="masthead">
        <div className="masthead-bg" />
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h1 className="mb-3">Coming Soon!</h1>
                <p
                  className="mb-5">{"We're working hard to finish the development of this site. Our target launch date is "}
                  <strong>January 2019</strong>! Sign up for updates using the form below!
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-group input-group-newsletter">
                    <input
                      type="email"
                      className="form-control"
                      onChange={EmailChange}
                      value={email}
                      placeholder="Enter email..."
                      aria-label="Enter email..."
                      aria-describedby="basic-addon" />
                    <div className="input-group-append">
                      <Button className="btn btn-secondary" type="submit">Notify Me!</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={OpenModal}>
        <ModalBody>
          {ModalMessage}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={closeModal}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

App.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  EmailChange: PropTypes.func.isRequired,
  OpenModal: PropTypes.bool,
  ModalMessage: PropTypes.string,
  email: PropTypes.string
};

App.defaultProps = {
  OpenModal: false,
  ModalMessage: '',
  email: ''
};

export default App;
