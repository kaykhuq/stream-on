/**
*
* SearchBar
*
*/

import React from 'react';
// import styled from 'styled-components';


class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onhandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    })

  }
  onSearch = () => {
    this.props.search(this.state.name);
  }
  onSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    // console.log(this.state.name);
    var { name } = this.state;
    return (
      <form className="form-inline view-view" onSubmit={this.onSubmit} >
        <div className="search-form mr-2">
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={this.onhandleChange}
            placeholder={"Search by " + this.props.name + " name..."}
          />

          <button
            type="submit"
            className="btn search-btn col-xs-12"
            onClick={this.onSearch}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>

    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;
