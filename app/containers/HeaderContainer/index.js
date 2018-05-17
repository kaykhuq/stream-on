/**
 *
 * HeaderContainer
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
import makeSelectHeaderContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import Header from '../../components/Header';

export class HeaderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // console.log(this.props);
    return (
      <div>
        <Header onLogout={this.props.onLogout} />
      </div>
    );
  }
}

HeaderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  headercontainer: makeSelectHeaderContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogout:()=>{
      dispatch(actions.logout())
    }
    ,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'headerContainer', reducer });
const withSaga = injectSaga({ key: 'headerContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HeaderContainer);
