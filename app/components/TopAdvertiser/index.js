/**
*
* TopAdvertiser
*
*/

import React from 'react';
import avatar from '../../../vendor/images/avatar.jpg';
// import styled from 'styled-components';


class TopAdvertiser extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="col-sm-6 col-xs-12">
        <h3>Top advertisers</h3>
        <div className="top_dashboard">
          <div className="row">
            <div className="content">
              <img src={avatar} alt="avatar" />
              <div className="float-left">
                <h4>BMW</h4>
                <h5>Food</h5>
              </div>
              <div className="pull-right d-flex justify-content-end">
                <p>100 000 €</p>
              </div>
            </div>

          </div>
          <div className="row">

            <div className="content">
              <img src={avatar} alt="avatar" />
              <div className="float-left">
                <h4>BMW</h4>
                <h5>Food</h5>
              </div>
              <div className="pull-right d-flex justify-content-end">
                <p>100 000 €</p>
              </div>
            </div>

          </div>
          <div className="row">

            <div className="content">
              <img src={avatar} alt="avatar" />
              <div className="float-left">
                <h4>BMW</h4>
                <h5>Food</h5>
              </div>
              <div className="pull-right d-flex justify-content-end">
                <p>100 000 €</p>
              </div>
            </div>

          </div>
          <div className="row">

            <div className="content">
              <img src={avatar} alt="avatar" />
              <div className="float-left">
                <h4>BMW</h4>
                <h5>Food</h5>
              </div>
              <div className="pull-right d-flex justify-content-end">
                <p>100 000 €</p>
              </div>
            </div>

          </div>
          <div className="row">

            <div className="content">
              <img src={avatar} alt="avatar" />
              <div className="float-left">
                <h4>BMW</h4>
                <h5>Food</h5>
              </div>
              <div className="pull-right d-flex justify-content-end">
                <p>100 000 €</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

TopAdvertiser.propTypes = {

};

export default TopAdvertiser;
