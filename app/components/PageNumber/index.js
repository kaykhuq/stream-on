/**
*
* PageNumber
*
*/

import React from 'react';
// import styled from 'styled-components';


class PageNumber extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link">1</a></li>
          <li className="page-item"><a className="page-link">2</a></li>
          <li className="page-item"><a className="page-link">3</a></li>
          <li className="page-item"><a className="page-link">></a></li>
        </ul>
      </nav>
    );
  }
}

PageNumber.propTypes = {

};

export default PageNumber;
