/**
*
* TopHeader
*
*/

import React from 'react';
import AddEditUser from '../AddEditUser';
import { Link } from 'react-router-dom';
import TopHeaderButton from './../TopHeaderButton';
// import styled from 'styled-components';


class TopHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function


  renderTitle(breadcrumb) {
    if (breadcrumb === "")
      return <h1 className="pl-5 ">{this.props.titleHeader}</h1>

    return <h1 className="pl-5 mb-3">{this.props.titleHeader}</h1>
  }
  render() {

    return (
      <div className="top-header">
        <div className="container-fluid">
          <div className="row pt-4">
            <div className="col d-flex justify-content-start flex-column">
              {this.renderTitle(this.props.breadcrumb)}
              <div className="pl-5">{this.props.breadcrumb}</div>
            </div>
            <div className="col d-flex justify-content-end">
              <TopHeaderButton
                  btnMag={this.props.btnMag}
                  btnFnc={this.props.btnFnc}
                  id={this.props.id}
                  href1={this.props.href1}
                  href2={this.props.href2}
                  getAction={this.props.getAction}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TopHeader.propTypes = {

};

export default TopHeader;
