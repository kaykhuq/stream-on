/**
 *
 * TagContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectTagContainer, makeSelectKeyword } from './selectors';
import { search } from './actions';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';

import ReactTable from "react-table";
import "react-table/react-table.css";
import testData from './test_data';
import Chance from "chance";
import { Link } from 'react-router-dom';
import Delete from '../../components/Delete';
import { relative } from 'path';
import AddEditTags from '../../components/AddEditTags';
import Content from '../../components/Content';
import SearchBar from '../../components/SearchBar';

const chance = new Chance();

function getData() {
  const data = testData.map(item => {
    const _id = chance.guid();
    return {
      _id,
      ...item
    };
  });
  return data;
}

function getColumns(data) {
  const columns = [];
  const sample = data[0];
  Object.keys(sample).forEach(key => {
    if (key !== "_id") {
      columns.push({
        accessor: key,
        Header: key,
        headerClassName: "border_border",
        className: "text-center"
      });
    }
  });
  return columns;
}

export class TagContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      action: ''
    }
    const data = getData();
    const columns = getColumns(data);
    columns.push({
      Header: '',
      accessor: '[row identifier to be passed to button]',
      Cell: ({ value }) => (
        <div className="dropdown">
          <button
            className="btn showoption dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            ...
               </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item"
                data-target="#add_tag"
                data-toggle="modal"
                onClick={() => this.getAction("Edit")}>
                <i className="fas fa-pencil-alt"></i> Edit
                     </a>
            </li>
            <li>
              <a className="dropdown-item">
                <i className="fa fa-download"></i> Intergration
                     </a>
            </li>
            <li>
              <a className="dropdown-item" data-target="#delete" data-toggle="modal" >
                <i className="fas fa-trash-alt"></i> Delete
                     </a>
            </li>
          </ul>
          <Delete act="delete" name={data[1].name} type="a tag" />
        </div>),
      style: {
        position: 'relative',
        overflow: 'visible'
      },
      className: "d-flex justify-content-end",
      headerClassName: "border_border"
    })
    this.state = {
      data,
      columns
    };
  }
  getAction = (action) => {
    this.setState({
      action: action
    })
  }
  render() {
    const { data, columns } = this.state;
    const { keyword, search,history } = this.props;
    // search on table
    const result = data.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return (
      <div>
        <Header history={history} >
          <TopHeader
            titleHeader="LE MONDE"
            btnMag="Edit Site"
            btnFnc="New Tag"
            breadcrumb={
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Bliink</li>
                  <li className="breadcrumb-item active" aria-current="page">Le Monde</li>
                  <li className="breadcrumb-item active" aria-current="page">Packs</li>
                </ol>
              </nav>
            }
            id="add_tag"
            getAction={this.getAction}
          />
        </Header>
        <Content>
          <SearchBar name="tag" search={search}/>
          <AddEditTags action={this.state.action === "New" ? "New" : "Edit"} />
          <ReactTable
            data={keyword ? result : data}
            columns={columns}
            defaultPageSize={10}
            className="-striped -highlight table-hover table"
          />
        </Content>
      </div>
    );
  }
}

TagContainer.propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  // volumn: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  keyword: makeSelectKeyword(),
});

function mapDispatchToProps(dispatch) {
  return {
    search: (keyword) => dispatch(search(keyword)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tagContainer', reducer });
const withSaga = injectSaga({ key: 'tagContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TagContainer);
