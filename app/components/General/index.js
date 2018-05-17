/**
*
* General
*
*/

import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
// import styled from 'styled-components';


class General extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.onChange = this.onChange.bind(this);
    this.onOk = this.onOk.bind(this);
  }


  onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  onOk(value) {
    console.log('onOk: ', value);
  }
  render() {
    return (
      <div className="general-tab" id="general">
        <div className="header">
          <h4>Step 1 of 4</h4>
          <h1>General</h1>
        </div>
        <div className="content">
          <form>
            <div className="left">
              <div className="form-group form_group2">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="ad name..." />
              </div>
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select name="role_select" className="form-control text-muted">
                  <option value="0" defaultValue>priority...</option>
                  <option value="1" title="Food retail and sevice">Carrefour</option>
                  <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                </select>
              </div>
              <div className="form-group width50 form_group2">
                <label htmlFor="startdate">Start date</label>

                <DatePicker
                  showTime
                  format="DD-MM-YYYY HH:mm:ss"
                  placeholder="dd-mm-yyyy"
                  onChange={this.onChange}
                  onOk={this.onOk}
                />
                {/* <input type="text" className="form-control" id="startdate" placeholder="hh/mm/dddd" /> */}
              </div>
              <div className="form-group width50 form_group2">
                <label htmlFor="enddate">End date</label>
                <DatePicker
                  showTime
                  format="DD-MM-YYYY HH:mm:ss"
                  placeholder="dd-mm-yyyy"
                  onChange={this.onChange}
                  onOk={this.onOk}
                />
              </div>
              <div className="form-group width50 form_group2">
                <label htmlFor="budget">Budget</label>
                <input type="text" className="form-control" id="budget" placeholder="budget..." />
              </div>
              <div className="form-group width50">
                <label htmlFor="rate">Rate</label>
                <select name="role_select" className="form-control text-muted">
                  <option value="0" defaultValue>rate...</option>
                  <option value="1" title="Food retail and sevice">Carrefour</option>
                  <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                </select>
              </div>
              <div className="form-group width50 form_group2">
                <label htmlFor="capping">Capping</label>
                <input type="text" className="form-control" id="capping" placeholder="capping..." />
              </div>
              <div className="form-group width50">
                <label htmlFor="typecapping">Type capping</label>
                <select name="role_select" className="form-control text-muted" id="">
                  <option value="0" defaultValue>type capping...</option>
                  <option value="1" title="Food retail and sevice">Carrefour</option>
                  <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                </select>
              </div>
              <div className="form-group form_group2">
                <label htmlFor="displayfrequency">Display frequency</label>
                <input type="text" className="form-control" id="displayfrequency" placeholder="display frequency..." />
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

General.propTypes = {

};

export default General;
