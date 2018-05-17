/**
*
* Menu
*
*/

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const MenuLinks = ( (label, to, activeWhenExact) => {
  return (
    <Route path={to} exact={activeWhenExact} children={({ match }) => {
      var active = match ? 'active_link' : '';
      return (
        <li className={active}>
          <Link to={to} >
            <span>{label}</span>
          </Link>
        </li>
      );
    }} />
  );
});

class Menu extends React.Component {
  render() {
    const { pathname } = this.props;
    return (
      <nav className="navbar navbar-default navbar-dark navbar-expand-lg">
        <Link to="/dashboard" className="navbar-brand">
          <img src={this.props.logo} alt="Bliink" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarHeader">
          <ul className="navbar-nav mr-auto pt-4  ">
            {MenuLinks('Dashboard','/dashboard',false)}
            {/* <MenuLinks to="/dashboard" label="Dashboard" activeWhenExact={false} /> */}
            <li className="nav-item dropdown">
              <a className={"nav-link dropdown-toggle pointers " +
                ((pathname === "/campaign/ad") || (pathname === "/campaign/advertiser") ||
                  (pathname === "/campaign") || (pathname === "/campaign/ad/newad")
                  ? "active_link" : "")}
                data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">
                <span>Campaigns</span>
              </a>
              <div className="dropdown-menu showoption border-0 pt-4">
                <Link to="/campaign/ad" className="dropdown-item py-2">Ads</Link>
                <Link to="/campaign/advertiser" className="dropdown-item py-2">Advertiser</Link>
                <Link to="/campaign" className="dropdown-item py-2">Campaigns</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className={"nav-link dropdown-toggle pointers " +
                ((pathname === "/inventory/network") || (pathname === "/inventory/pack") ||
                  (pathname === "/inventory/site") || (pathname === "/inventory/tag")
                  ? "active_link" : "")} data-toggle="dropdown"
                role="button" aria-haspopup="true"
                aria-expanded="false">
                <span>Inventory</span>
              </a>
              <div className="dropdown-menu showoption border-0 pt-4">
                <Link to="/inventory/network" className="dropdown-item py-2">Networks</Link>
                <Link to="/inventory/pack" className="dropdown-item py-2">Packs</Link>
                <Link to="/inventory/site" className="dropdown-item py-2">Sites</Link>
                <Link to="/inventory/tag" className="dropdown-item py-2">Tags</Link>
              </div>
            </li>
            {MenuLinks('Users','/user',false)}
            {MenuLinks('Reports','/report',false)}


          </ul>
          <div id="account_login" className="pull-right dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown">
              <img alt="Samuel" src={this.props.avt} />
              <span>Samuel</span>
              <i className="fas fa-caret-down"></i>
            </button>
            <ul className="dropdown-menu ">
              <li>
                <Link to="/account" className="dropdown-item py-1">
                  Profile
                        </Link>
              </li>
              <li>
                <a data-toggle="modal"
                  data-target="#logout"
                  className="dropdown-item py-1">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="modal fade" tabIndex="-1" role="dialog" id="logout"
          aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog center_modal modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h2>Log out</h2>
                <div>
                  <p>Are you sure to log out</p>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">
                  No
                </button>
                <button type="button" className="btn btn-danger btn-radius">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
