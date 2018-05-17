/**
*
* Table
*
*/

import React from 'react';
import PropsType from 'prop-types';
import _ from 'lodash';
import SorttableHeader from '../SortableHeader/Loadable';
import SelectAllHeader from '../SelectAllHeader/Loadable';
import TableRow  from '../TableRow/Loadable';
import TableNoData  from '../TableNoData/Loadable';

// import styled from 'styled-components';


class Table extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      selectable,
      data,
      headers,
      columns,
      filter,
      primaryKey,
      CheckboxComponent,
      NoDataComponent,
    } = this.props;
    const className = this.props.className || 'table-sm table-striped table-hover';
    const visibleColumns = columns.filter((c) => !c.hidden);
    const visibleColumnsLength = visibleColumns.length;
    const NoDataContent = NoDataComponent || TableNoData;
    return (
      <table className={`table ${className}`}>
        <thead>
          <tr>
            {selectable &&
              <SelectAllHeader
                {...headers.select}
                CheckboxComponent={CheckboxComponent}
              />
            }
            {visibleColumns.map((col) => {
              if (col.sortable && !col.hidden) {
                return (
                  <SortableHeader
                    key={col.key}
                    title={col.title}
                    {...headers[col.key]}
                  />);
              }
              return (
                <th
                  data-key={col.key}
                  key={col.key}
                  title={col.title}
                  data-toggle={col.title ? 'tooltip' : ''}
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={_.get(row, primaryKey)} {...this.props} row={row} />
          ))}
          {!data.length &&
            <tr>
              <td colSpan={selectable ? visibleColumnsLength + 1 : visibleColumnsLength}>
                <NoDataContent filter={filter} />
              </td>
            </tr>
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  filter: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired,
  selectable: PropTypes.bool,
  selectEnabled: PropTypes.func,
  className: PropTypes.string,
  styleName: PropTypes.string,
  CheckboxComponent: PropTypes.func,
  NoDataComponent: PropTypes.func,
};

export default Table;
