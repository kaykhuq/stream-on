/**
*
* AddAdvertiser
*
*/

import React from 'react';
// import styled from 'styled-components';


class AddAdvertiser extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
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
      <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_advertiser">
        <div className="modal-dialog" role="document">

          <div className="modal-header d-flex justify-content-start">
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon-arrow-left2"></i>
            </button>
            <h2 className="pt-4">{this.props.action} advertiser</h2>
          </div>
          <div className="modal-content">
            <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="d-flex justify-content-start">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="advertiser name..." />
                </div>
                <div className="form-group">
                  <label className="d-flex justify-content-start">Business category</label>
                  <select name="select_category" className="form-control text-muted" id="">
                    <option value="0" defaultValue>select business category...</option>
                    <option value="1" title="Food retail and sevice">Carrefour</option>
                    <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="modal-footer">
              <button type="submit" className="btn btn-danger btn-radius">VALIDATE</button>
              <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddAdvertiser.propTypes = {

};

export default AddAdvertiser;
