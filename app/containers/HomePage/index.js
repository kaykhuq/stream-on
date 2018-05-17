/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import messages from './messages';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
// import ListUsers from '../../components/ListUsers';
// import ListTags from '../../components/ListTags';
// import ListSites from '../../components/ListSites';
// import ListPacks from '../../components/ListPacks';
// import ListNetworks from '../../components/ListNetworks';
// import ListAds from '../../components/ListAds';
// import ListAdvertisers from '../../components/ListAdvertisers';
// import ListCampaigns from '../../components/ListCampaigns';
import HomePageSignIn from '../../components/HomePageSignIn';
import UserMyAccount from '../../components/UserMyAccount';
import UserResetPassword from '../../components/UserResetPassword';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <Header /> */}
        <HomePageSignIn />

      </div>
    );
  }
}
