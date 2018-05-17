/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import Menu from '../Menu';
import avatar from '../../../vendor/images/avatar.jpg';
import logo from '../../../vendor/images/logo.png';
import routes from '../../routes';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderTopheader(pathname, routes) {
    return routes.map(route => {
      if (pathname === route.url)
        return this.props.children;
      return;
    })
  }
  render() {
    const { history } = this.props;
    return (
      <div id="header">
        <div className="container-fluid">
          <Menu logo={logo} avt={avatar} pathname={history.location.pathname} onLogout={this.props.onLogout} />
        </div>
        {this.renderTopheader(history.location.pathname, routes)}
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
