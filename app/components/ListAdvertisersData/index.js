/**
*
* ListAdvertisersData
*
*/

import React from 'react';
import Delete from '../Delete';
// import styled from 'styled-components';


class ListAdvertisersData extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.category}</td>
        <td></td>
        <td><span className="badge badge-success">{this.props.status}</span></td>
        <td>
          <div className="dropdown show">
            <button className="btn showoption dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ...
            </button>
            <ul className="dropdown-menu ">
              <li><a className="dropdown-item" data-target="#add_advertiser" data-toggle="modal" href="#"><i className="fas fa-pencil-alt"></i> Edit</a></li>
              <li><a className="dropdown-item" data-target="#delete" data-toggle="modal"  href="#"><i className="fas fa-trash-alt"></i> Delete</a></li>
            </ul>
          </div>
        </td>
        <Delete name={this.props.name} type={this.props.type}/>
      </tr>
    );
  }
}

ListAdvertisersData.propTypes = {

};

export default ListAdvertisersData;
