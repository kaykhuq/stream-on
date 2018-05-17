/**
*
* TableNoData
*
*/

import React from 'react';
// import styled from 'styled-components';


class TableNoData extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="text-center">
        There is no data available
      </div>
    );
  }
}

TableNoData.propTypes = {

};

export default TableNoData;
