/**
*
* SelectRow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class SelectRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      onRowCheckedChange,
      isSelected,
      isEnabled,
      row,
      CheckboxComponent,
    } = this.props;
    const checked = isSelected(row);
    if (!isEnabled || isEnabled(row)) {
      if (CheckboxComponent) {
        return (<CheckboxComponent
          type="checkbox"
          checked={checked}
          onChange={() =>
            onRowCheckedChange(row)
          }
        />);
      }
      return (<input
        type="checkbox"
        checked={checked}
        onChange={() =>
          onRowCheckedChange(row)
        }
      />);
    }
    return null;
  }
}

SelectRow.propTypes = {
  onRowCheckedChange: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  row: PropTypes.object.isRequired,
  isEnabled: PropTypes.func,
  CheckboxComponent: PropTypes.func,
};

export default SelectRow;
