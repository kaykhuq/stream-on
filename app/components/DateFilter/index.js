/**
*
* DateFilter
*
*/

import React from 'react';
// import styled from 'styled-components';
import { DatePicker } from 'antd';
import '../../../node_modules/antd/dist/antd.css';
const { RangePicker, MonthPicker } = DatePicker

class DateFilter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="input-group  filter d-flex justify-content-end col-sm-4">
        <button type="button" className="btn btn-light border line_height ">
          <div className="filter_group_by ">
            <label>Period</label>
            <span className="mr-2">
              <RangePicker
                renderExtraFooter={() => 'extra footer'}
                showTime
                format="DD-MM-YYYY "
              />
            </span>
            <i className="fa fa-angle-down"></i>
          </div>
        </button>
      </div>
    );
  }
}

DateFilter.propTypes = {

};

export default DateFilter;
