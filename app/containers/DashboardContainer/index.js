/**
 *
 * DashboardContainer
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
import makeSelectDashboardContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
import TopHeader from '../../components/TopHeader';
import DateFilter from '../../components/DateFilter';

export class DashboardContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // return (
    //   <div>
    //     <Header {...this.props}>
    const { history } = this.props;
    return (
      <div>
        <Header history={history}>
          <TopHeader titleHeader="Dashboard" btnMag="" btnFnc="" breadcrumb="" />
        </Header>
        <Dashboard />
      </div>
    );
  }
}

DashboardContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardcontainer: makeSelectDashboardContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboardContainer', reducer });
const withSaga = injectSaga({ key: 'dashboardContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DashboardContainer);
