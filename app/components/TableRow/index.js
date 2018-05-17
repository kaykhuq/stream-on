/**
*
* TableRow
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SelectRow from '../SelectRow/Loadable';
// import styled from 'styled-components';

const resolveProps = (row, componentProps, tableProps) => {
  if (!componentProps) {
    return {};
  } else if (_.isFunction(componentProps)) {
    return componentProps(row, tableProps);
  } else if (_.isObject(componentProps)) {
    return componentProps;
  }
  throw new Error('componentProps should be object or function!');
};

class TableRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      row,
      selectable,
      selectEnabled,
      headers,
      columns,
      CheckboxComponent,
      ...otherProps
    } = this.props;
    const select = headers.select;
    const visibleColumns = columns.filter((c) => !c.hidden);
    let className = '';
    if (selectable && select.isSelected(row)) {
      className = 'table-info';
    }
    return (
      <tr className={className}>
        {selectable &&
          <td key="select" style={{ width: '1%', whiteSpace: 'nowrap' }}>
            <SelectRow
              row={row}
              isEnabled={selectEnabled}
              CheckboxComponent={CheckboxComponent}
              {...select}
            />
          </td>
        }
        {visibleColumns.map((col) =>
          <td key={col.key} className={col.className}>
            {col.Component ?
              <col.Component
                row={row}
                key={col.key}
                {...resolveProps(row, col.componentProps, otherProps)}
              >
                {_.get(row, col.key)}
              </col.Component> : _.get(row, col.key)
            }
          </td>
        )}
      </tr>
    );
  }
}

TableRow.propTypes = {
  selectable: PropTypes.bool,
  selectEnabled: PropTypes.func,
  row: PropTypes.object.isRequired,
  headers: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  CheckboxComponent: PropTypes.func,
};

export default TableRow;
