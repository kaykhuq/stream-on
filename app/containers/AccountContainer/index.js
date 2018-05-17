/**
 *
 * AccountContainer
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
import makeSelectAccountContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import UserMyAccount from '../../components/UserMyAccount';
import TopHeader from '../../components/TopHeader';

export class AccountContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // return (
    //   <div>
    //     <Header {...this.props} >
    const {history}=this.props;
    return (
      <div>
        <Header history={history} >
          <TopHeader titleHeader="Profile" btnMag="" btnFnc="" breadcrumb="" />
        </Header>
        <UserMyAccount />
      </div>
    );
  }
}

AccountContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  accountcontainer: makeSelectAccountContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'accountContainer', reducer });
const withSaga = injectSaga({ key: 'accountContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AccountContainer);
