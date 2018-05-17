/**
*
* Creative
*
*/

import React from 'react';
import avatar from '../../../vendor/images/avatar.jpg';
// import styled from 'styled-components';


class Creative extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="general-tab" id="general">
        <div className="header">
          <h4>Step 3 of 4</h4>
          <h1>Creative</h1>
        </div>
        <div className="content">
          <form>
            <div className="left">
              <div className="form-group select_image">
                <label htmlFor="category">Select creative category</label>
                <p className="sub-title">quod si rectum</p>
                <div name="creative_category" className="select_image row" id="">
                  <img value="1" alt="Quod si rectum stauerimus" src={avatar}/>
                  <img value="2" alt="Quod si rectum stauerimus" src={avatar}/>
                  <img value="3" alt="Quod si rectum stauerimus" src={avatar}/>
                  <img value="4" alt="Quod si rectum stauerimus" src={avatar}/>
                </div>

              </div>
              <div className="form-group">
                <label htmlFor="size">Select ad size</label>
                <p className="sub-title">quod si rectum</p>
                <select name="role_select" className="form-control" id="" >
                  <option value="1" title="Food retail and sevice">Carrefour</option>
                  <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="addcreative">Add your creative</label>
                <p className="sub-title">quod si rectum</p>
              </div>
              <div className="form-group">
                <div className="control-label">
                  <label htmlFor="type">Select type</label>
                </div>
                <select id="select_advertiser" className="form-control text-muted">
                  <option value="1" title="Food retail and sevice">Carrefour</option>
                  <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                </select>
              </div>
            </div>
            <div className="form-group-button">
              <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
              <button type="button" className="btn btn-danger btn-radius">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Creative.propTypes = {

};

export default Creative;
