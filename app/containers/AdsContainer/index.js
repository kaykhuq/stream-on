/**
 *
 * AdsContainer
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
import makeSelectAdsContainer from './selectors';
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
export class AdsContainer extends React.Component {
   constructor() {
      super();
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
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                     <Link to="/newad" className="pl-4 dropdown-item">
                        <i className="fas fa-pencil-alt"></i> Edit
                     </Link>
                  </li>
                  <li>
                     <a className="dropdown-item">
                        <i className="fa fa-download"></i> Preview
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" data-target="#delete" data-toggle="modal"  >
                        <i className="fas fa-trash-alt"></i> Cancel
                     </a>
                  </li>
               </ul>
               <Delete name={data[0].name} type="an Ad" />
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
   render() {
      const { data, columns } = this.state;
      // return (
      //    <div>
      //       <Header {...this.props}>
      const { history } = this.props;
      return (
        <div>
          <Header history={history}>
               <TopHeader titleHeader="Dior men spring 2017" btnMag="Edit Campaign" btnFnc="New Ad"
                  breadcrumb={
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="#">Campaigns</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Dior men sprint 2017</li>
                           <li className="breadcrumb-item active" aria-current="page">Ads</li>
                        </ol>
                     </nav>
                  }
                  href1="#" href2="/newad" id=""
               />
            </Header>
            <Content >
               <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={10}
                  className="-striped -highlight table-hover table"
               />
            </Content>

         </div>

      );
   }
}

AdsContainer.propTypes = {
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
   adscontainer: makeSelectAdsContainer(),
});

function mapDispatchToProps(dispatch) {
   return {
      dispatch,
   };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'adsContainer', reducer });
const withSaga = injectSaga({ key: 'adsContainer', saga });

export default compose(
   withReducer,
   withSaga,
   withConnect,
)(AdsContainer);
