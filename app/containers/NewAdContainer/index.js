/**
 *
 * NewAdContainer
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
import makeSelectNewAdContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import NewAd from '../../components/NewAd';
import TopHeader from '../../components/TopHeader';

export class NewAdContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // return (
    //   <div>
    //     <Header {...this.props}>
    const { history } = this.props;
    return (
      <div>
        <Header history={history}>
          <TopHeader titleHeader="New ad" btnMag="" btnFnc=""
            breadcrumb={
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Campaigns</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Dior men sprint 2017</li>
                  <li className="breadcrumb-item active" aria-current="page">New ad</li>
                </ol>
              </nav>
            } />
        </Header>
        <NewAd />
      </div>
    );
  }
}

NewAdContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newadcontainer: makeSelectNewAdContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'newAdContainer', reducer });
const withSaga = injectSaga({ key: 'newAdContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewAdContainer);
