/**
 *
 * Campaigns
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
import { makeSelectKeyword, makeSelectFilter } from './selectors';
import { search, onFilter } from './actions';
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

import Content from '../../components/Content';
import SearchBar from '../../components/SearchBar';
import StatusFilter from '../../components/StatusFilter';
import AddCampaign from '../../components/AddCampaign';
import DateFilter from '../../components/DateFilter';

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

export class Campaigns extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      action: ''
    }
    const data = getData();
    const columns = getColumns(data);
    columns[8] = {
      Header: "status",
      accessor: "status",
      headerClassName: "border_border",
      Cell: (row) => (
        <div className={row.value === "Validated" ? "badge badge-success" :
          row.value === "Pending" ? "badge badge-warning" : "badge badge-default"}>
          {row.value}
        </div>
      )
    };
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
          <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <li>
              <a
                className="dropdown-item"
                data-target="#add_campaign"
                data-toggle="modal"
                onClick={() => this.getAction("Edit")}
              >
                <i className="fas fa-pencil-alt"></i> Edit
                        </a>
            </li>
            <li><a className="dropdown-item" data-target="#delete" data-toggle="modal"  ><i className="fas fa-trash-alt"></i> Cancel</a></li>
          </ul>
          <Delete act="delete" name={data[0].name} type="a campaign" />
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
    var { data, columns } = this.state;
    const { keyword, search, onFilter,filterStatus,history } = this.props;
    // search on table
    const result = data.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
     // filter on table
     if(filterStatus!==null){
      data = data.filter((item) => {
        if(filterStatus===1){
          return item.status==="Validated";
        }else
          return item.status=== (filterStatus===2?"Pending":"Canceled")
      });
    }
    return (
      <div>
        <Header history={history} >
          <TopHeader
            titleHeader="Campaign"
            btnMag="Manage Advertisers"
            btnFnc="New Campaign"
            breadcrumb=""
            id="add_campaign"
            getAction={this.getAction}
          />
        </Header>
        <Content >
          <div className="input-group filter col-sm-8 d-flex  float-left">
            <SearchBar name="campaign" search={search} />
            <StatusFilter onFilter={onFilter} />

          </div>
          <div className="py-3">
            <DateFilter />
          </div>
          <AddCampaign action={this.state.action === "New" ? "New" : "Edit"} />
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

Campaigns.propTypes = {
  // name:PropTypes.string.isRequired,
  // advertiser:PropTypes.string.isRequired,
  // startdate:PropTypes.string.isRequired,
  // enddate:PropTypes.string.isRequired,
  // budget:PropTypes.string.isRequired,
  // impression:PropTypes.string.isRequired,
  // click:PropTypes.string.isRequired,
  // ctr:PropTypes.string.isRequired,
  // status:PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  keyword: makeSelectKeyword(),
  filterStatus: makeSelectFilter(),
});

function mapDispatchToProps(dispatch) {
  return {
    search: (keyword) => dispatch(search(keyword)),
    onFilter: (filterStatus) => dispatch(onFilter(filterStatus)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'campaigns', reducer });
const withSaga = injectSaga({ key: 'campaigns', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Campaigns);
