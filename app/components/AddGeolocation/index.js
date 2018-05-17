/**
*
* AddGeolocation
*
*/

import React from 'react';
// import styled from 'styled-components';


class AddGeolocation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_geolocation">
        <div className="modal-dialog" role="document">

          <div className="modal-header d-flex justify-content-start">
          <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"><i className="icon-arrow-left2"></i></button>
            <h2 className="pt-4">New geolocation</h2>
          </div>
          <div className="modal-content">
          <form>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="selectsite" className="d-flex justify-content-start">Select sites</label>
                <select name="role_select" className="form-control text-muted" id="">
                  <option value="1" title="Food retail and sevice">Carrefour</option>
                  <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                </select>
              </div>
              <div className="form-group width50">
                <label htmlFor="longtitude" className="d-flex justify-content-start">Longtitude</label>
                <input type="text" className="form-control" id="latitude" placeholder="longtitude..." />
              </div>
              <div className="form-group width50">
                <label htmlFor="latitude" className="d-flex justify-content-start">Latitude</label>
                <input type="text" className="form-control" id="latitude" placeholder="latitude..." />
              </div>

              <div className="form-group">
                <div id="map"></div>
              </div>
            </div>
            </form>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-radius">VALIDATE</button>
              <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddGeolocation.propTypes = {

};

export default AddGeolocation;
