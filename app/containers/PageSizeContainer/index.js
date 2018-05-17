/**
 *
 * PageSizeContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import makeSelectors from '../Campaigns/selectors';
import { tablePageSizeChanged } from '../Campaigns/actions';
import PageSize from '../../components/PageSize';

const mapStateToProps = (state, { tableName }) => {
  const selectors = makeSelectors(tableName);
  const isInitialized = selectors.getIsInitialized(state);

  if (!isInitialized) {
    return {
      isInitialized,
    };
  }

  const pageInfo = selectors.getPageInfo(state);

  return {
    isInitialized,
    pageSize: pageInfo.pageSize,
    pageSizes: pageInfo.pageSizes,
    value: selectors.getFilter(state),
    options: selectors.getFilterOptions(state),
    totalSize: selectors.getFiltered(state).length,
  };
};

const mapDispatchToProps = (dispatch, { tableName }) => ({
  onChange: (pageSize) => dispatch(tablePageSizeChanged(tableName, pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(({
  isInitialized,
  ...otherProps
}) => {
  if (!isInitialized) { return null; }
  return <PageSize {...otherProps} />;
});