/**
*
* Group
*
*/

import React from 'react';
// import styled from 'styled-components';


class Group extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    var filter = name === 'filter' ? value : this.state.filter;

    this.props.onFilter(filter);

    this.setState({
      [name]: value
    });
  }
  handleClick = () => {
    var action = "New";
    this.props.getAction(action);
  }
  render() {
    return (
      <div className="input-group filter col-sm-8 d-flex  float-left">
        <div className="search-form d-flex align-items-center border rounded mr-2">
          <span className="position-absolute pl-1">GROUP BY</span>
          <select
            name="filter"
            className="form-control width2 select_text2 border-0 height1"
            onChange={this.onChange}
          >
            <option value={1} >Date</option>
            <option value={2} >Week</option>
            <option value={3} >Month</option>
            <option value={4} >Advertiser</option>
            <option value={5} >Campaign</option>
          </select>
        </div>
        <div className="filter_style_value">
          <label className="close text-dark">x</label>
          <label htmlFor="">Advertiser</label>
          <span>Carrefour,Adias</span>
        </div>
        <button type="button" className="add-filter btn btn-danger btn-radius2" data-toggle="modal" data-target="#add_filter" onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

Group.propTypes = {

};

export default Group;
