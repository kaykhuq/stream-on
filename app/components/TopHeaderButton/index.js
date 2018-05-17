/**
*
* TopHeaderButton
*
*/

import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';


class TopHeaderButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleClick = () => {
    var action = "New";
    this.props.getAction(action);
  }
  renderButton(btn1, btn2) {
    if (btn1 === "") {
      if (btn2 === "")
        return (
          <div className="pull-right pr-4 mt-3 top-header-btn">
          </div>
        );
      else {
        return (
          <div className="pull-right pr-4 mt-3 top-header-btn text-uppercase">
            <a className="btn btn-danger btn-width"
              data-toggle="modal"
              ref="btn"
              data-target={"#" + this.props.id}
              href={this.props.href2}
              onClick={this.handleClick}
            >
              {btn2}
            </a>
          </div>
        );
      }
    }
    else {
      if (btn2 === "")
        return (
          <div className="pull-right pr-4 mt-3 top-header-btn text-uppercase">
            <a className="btn btn-secondary showoption btn-width" href={this.props.href1}>{btn1}</a>
          </div>
        );
      else
        return (
          <div className="pull-right pr-4 mt-3 top-header-btn text-uppercase">
            <a className="btn btn-secondary showoption btn-width " href={this.props.href1}>{btn1}</a>
            {this.props.href2 === "/newad" ? <Link className="btn btn-danger btn-width"
            to={this.props.href2}
            >{btn2}</Link> :
              <a className="btn btn-danger btn-width"
                data-toggle="modal"
                data-target={"#" + this.props.id}
                onClick={this.handleClick}
              >
                {btn2}
              </a>
            }
          </div>
        );
    }
  }
  render() {
    return (
      <div>
        {this.renderButton(this.props.btnMag, this.props.btnFnc)}
      </div>
    );
  }
}

TopHeaderButton.propTypes = {

};

export default TopHeaderButton;
