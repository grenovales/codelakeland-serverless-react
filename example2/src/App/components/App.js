/**
 * App
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles/App.css';

import bckVideo from './videos/bg.mp4';
import posterImg from './images/bg-mobile-fallback.jpg';
import { Button } from 'reactstrap';

/* eslint jsx-a11y/media-has-caption: 0 */
const App = (props) => {
  const {
    handleSubmit
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
                <div className="input-group input-group-newsletter">
                  <form onSubmit={handleSubmit}>
                    <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                    <div className="input-group-append">
                      <Button className="btn btn-secondary" type="submit">Notify Me!</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};


export default App;
