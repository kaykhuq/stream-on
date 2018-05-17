/**
*
* SortableHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class SortableHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      sortKey,
      name,
      sorted,
      title,
      handleClick,
    } = this.props;
    return (
      <th
        data-key={sortKey}
        data-toggle={title ? 'tooltip' : ''}
        style={{
          cursor: 'pointer',
        }}
        title={title}
        onClick={() => handleClick(sortKey)}
      >
        <span style={{ marginRight: '5px' }}>
          {name}
        </span>
        {sorted === 'asc' && <i className="fa fa-long-arrow-up" />}
        {sorted === 'desc' && <i className="fa fa-long-arrow-down" />}
        {sorted === null && <i
          className="fa fa-arrows-v"
          style={{ color: '#ccc' }}
        />}
      </th>
    );
  }
}

SortableHeader.propTypes = {
  sortKey: PropTypes.string.isRequired,
  name: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  sorted: PropTypes.string,
  title: PropTypes.string,
};

export default SortableHeader;
