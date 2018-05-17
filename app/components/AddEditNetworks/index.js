/**
*
* AddEditNetworks
*
*/

import React from 'react';
// import styled from 'styled-components';


class AddEditNetworks extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  handleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="modal fade popup_add" tabIndex="-1" role="dialog" id={this.props.id}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header d-flex justify-content-start">
              <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              >
              <i className="icon-arrow-left2"></i>
              </button>
                <h2 className="pt-5">{this.props.action} {this.props.type}</h2>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label className="d-flex justify-content-start">Name</label>
                    <input type="text" className="form-control" id="inputName"
                      placeholder="network name..." onChange={this.handleChange} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-danger btn-radius">VALIDATE</button>
                  <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEditNetworks.propTypes = {

};

export default AddEditNetworks;
