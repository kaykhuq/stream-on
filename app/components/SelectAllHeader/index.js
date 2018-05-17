/**
*
* SelectAllHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class SelectAllHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      onSelectAllChange,
      selectedRows,
      selectAll,
      CheckboxComponent,
    } = this.props;
    if (CheckboxComponent) {
      return (
        <th>
          <CheckboxComponent
            type="checkbox"
            checked={selectAll}
            onChange={onSelectAllChange}
          /> <span className="text-muted">({selectedRows.length})</span>
        </th>
      );
    }
    return (
      <th>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={onSelectAllChange}
        /> <span className="text-muted">({selectedRows.length})</span>
      </th>
    );
  }
}

SelectAllHeader.propTypes = {
  onSelectAllChange: PropTypes.func.isRequired,
  selectAll: PropTypes.bool.isRequired,
  selectedRows: PropTypes.array.isRequired,
  CheckboxComponent: PropTypes.func,
};

export default SelectAllHeader;
