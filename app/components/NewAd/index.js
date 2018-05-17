/**
*
* NewAd
*
*/

import React from 'react';
import General from '../General';
import Delivery from '../Delivery';
import Creative from '../Creative';
import Target from '../Target';
// import styled from 'styled-components';


class NewAd extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="create-view">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <ul className="nav nav-tabs">
                <li ><a data-toggle="tab" href="#general"><span>1</span> General</a></li>
                <li><a data-toggle="tab" href="#delivery"><span>2</span> Delivery</a></li>
                <li><a data-toggle="tab" href="#creative"><span>3</span> Creative</a></li>
                <li><a data-toggle="tab" href="#targeting"><span>4</span> Targeting</a></li>
              </ul>
            </div>
            <div className="col-sm-8">
              <div className="tab-content">
                <div id="general" className="tab-pane fade in active">
                  <General />
                </div>
                <div id="delivery" className="tab-pane fade">
                  <Delivery />
                </div>
                <div id="creative" className="tab-pane fade">
                  <Creative />
                </div>
                <div id="targeting" className="tab-pane fade">
                  <Target />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewAd.propTypes = {

};

export default NewAd;
