/**
 *
 * ReportContainer
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
import { makeSelectReportContainer, makeSelectFilter } from './selectors';
import { onFilter } from './actions';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import Content from '../../components/Content';
import DateFilter from '../../components/DateFilter';
import Group from '../../components/Group';
import AddFilter from '../../components/AddFilter';

import ReactTable from "react-table";
import "react-table/react-table.css";
import testData from './test_data';
import Chance from "chance";
import { Link } from 'react-router-dom';
import Delete from '../../components/Delete';
import { relative } from 'path';

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

export class ReportContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        <div className="badge badge-success">
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
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item"
              data-target="#add_filter"
              data-toggle="modal"
              onClick={() => this.getAction("Edit")}
            >
              <i className="fas fa-pencil-alt" ></i> Edit</a>
            <a className="dropdown-item"><i className="fas fa-download"></i> Preview</a>
            <a className="dropdown-item" data-target="#delete" data-toggle="modal">
              <i className="fas fa-trash-alt">
              </i> Cancel
                  </a>
          </div>
          <Delete name={data[0].name} type="a report" />
        </div>),
      style: {
        position: 'relative',
        overflow: 'visible'
      },
      className: "d-flex justify-content-end",
      headerClassName: "border_border"
    });
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
    const { onFilter, filterStatus,history } = this.props;
    console.log(filterStatus);

     // filter on table
     if(filterStatus!==''){
      data = data.filter((item) => {
        if(filterStatus===1){
          return item.startdate;
        }else if(filterStatus===2){
          return item.startdate;
        }else if(filterStatus===3){
          return item.startdate;
        }else if(filterStatus===4){
          return item.advertiser;
        }else{
          return item.campaign;
        }
      });
    }
    return (
      <div>
        <Header history={history}>
          <TopHeader titleHeader="Reports" btnMag="Export" btnFnc="" breadcrumb="" />
        </Header>
        <Content>
          <Group getAction={this.getAction} onFilter={onFilter} />
          <DateFilter />
          <AddFilter action={this.state.action === "New" ? "New" : "Edit"} />
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={5}
            className="-striped -highlight table-hover table"
          />
        </Content>

      </div>
    );
  }
}

ReportContainer.propTypes = {
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
  filterStatus: makeSelectFilter(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFilter: (filterStatus) => dispatch(onFilter(filterStatus)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'reportContainer', reducer });
const withSaga = injectSaga({ key: 'reportContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ReportContainer);
