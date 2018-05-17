/**
*
* StatusFilter
*
*/

import React from 'react';
// import styled from 'styled-components';


class StatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value =  target.value;
    var filter = name === 'filter' ? value : this.state.filter;

    this.props.onFilter(filter);

    this.setState({
        [name]: value
    });
  }
  render() {
    const { filter } = this.state;

    // console.log(filter);
    return (
      <div className="search-form d-flex align-items-center border rounded height0">
        <span className="position-absolute pl-1">STATUS</span>
        <select
          name="filter"
          className="form-control width1 select_text border-0 height1"
          value={filter}
          onChange={this.onChange}
        >
          <option value={1} >Validated</option>
          <option value={2} >Pending</option>
          <option value={3} >Cancel</option>
        </select>
      </div>
    );
  }
}

StatusFilter.propTypes = {

};

export default StatusFilter;
