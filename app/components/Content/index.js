/**
*
* Content
*
*/

import React from 'react';

// import styled from 'styled-components';


class Content extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="main-content">
      <div className="list-view container col-xl pt-4">
        {this.props.children}
      </div>
    </div>
    );
  }
}

Content.propTypes = {

};

export default Content;
