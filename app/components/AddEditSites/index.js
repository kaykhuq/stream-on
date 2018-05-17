/**
*
* AddEditSites
*
*/

import React from 'react';
// import styled from 'styled-components';


class AddEditSites extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_site">
          <div className="modal-dialog" role="document">
            <div className="modal-content ">

              <div className="modal-header d-flex justify-content-start">
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"><i className="icon-arrow-left2"></i></button>
                <h2 className="pt-5">{this.props.action} site</h2>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="modal-body">
                  <div className="form-group margin_bot">
                    <label className="d-flex justify-content-start">Name</label>
                    <input type="text"
                      className="form-control input-group-lg"
                      id="inputName"
                      placeholder="site name..."
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group margin_bot">
                    <label className="d-flex justify-content-start">Network</label>
                    <select name="role_select" id="" className="form-control text-muted">
                      <option value="1" title="Food retail and sevice">Carrefour</option>
                      <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                    </select>

                  </div>
                  <div className="form-group margin_bot">
                    <label className="d-flex justify-content-start">Platform</label>
                    <select name="role_select" id="" className="form-control text-muted">
                      <option value="1" title="Food retail and sevice">Carrefour</option>
                      <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="modal-footer d-flex justify-content-start modalfooter2">
                <button type="submit" className="btn btn-danger btn-radius">VALIDATE</button>
                <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
              </div>

            </div>
          </div>
        </div>
      </div >
    );
  }
}

AddEditSites.propTypes = {

};

export default AddEditSites;
