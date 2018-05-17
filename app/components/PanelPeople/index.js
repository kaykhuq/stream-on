/**
*
* PanelPeople
*
*/

import React from 'react';
import avatar from '../../../vendor/images/avatar.jpg';
// import styled from 'styled-components';


class PanelPeople extends React.Component {
  // componentWillMount() {
  //   this.props.onLoadPack();
  // }
  render() {
    const data = this.props.data.map((val) => (
      <div key={val.id} className="panel-people col-xl-3 col-lg-3 col-md-6">
        <div className="panel-people-inner ">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle float-right"
              id="dropdownMenuButton"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false" >
              ...
            </button>
            <div
              className="dropdown-menu min_max"
              aria-labelledby="dropdownMenuButton" >
              <a
                className="dropdown-item"
                data-toggle="modal"
                data-target={'#' + this.props.id}
                onClick={() => this.props.getAction("Edit")} >
                <i className="fas fa-pencil-alt"></i> Edit
              </a>
              <a className="dropdown-item"
                data-toggle="modal"
                data-target='#delete'>
                <i className="fas fa-trash-alt"></i> Cancel
              </a>
            </div>
          </div>
          <img alt="Samuel" src={avatar} />
          <h3>{val.name}</h3>
          <p>{val.option1}</p>
          <p>{val.option2}</p>
        </div>
      </div>
    ));
    return (
      <div className="row view-view">
        {data}
      </div>
    );
  }
}

PanelPeople.propTypes = {

};

export default PanelPeople;
