// /**
//  *
//  * App.js
//  *
//  * This component is the skeleton around the actual pages, and should only
//  * contain code that should be seen on all pages. (e.g. navigation bar)
//  *
//  * NOTE: while this component should technically be a stateless functional
//  * component (SFC), hot reloading does not currently support SFCs. If hot
//  * reloading is not a necessity for you then you can refactor it and remove
//  * the linting exception.
//  */

// import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import User from '../UserContainer/Loadable';
// import ListTags from '../TagContainer/Loadable';
// import ListSites from '../SiteContainer/Loadable';
// import ListPacks from '../PackContainer/Loadable';
// import ListNetworks from '../NetworkContainer/Loadable';
// import ListAds from '../AdsContainer/Loadable';
// import ListAdvertisers from '../AdvertiserContainer/Loadable';
// import ListCampaigns from '../Campaigns/Loadable';
// import HomePageSignIn from '../../components/HomePageSignIn';
// import UserMyAccount from '../AccountContainer/Loadable';
// import UserResetPassword from '../../components/UserResetPassword';
// import Report from '../ReportContainer/Loadable';
// import Dashboard from '../DashboardContainer/Loadable';
// import NewAd from '../NewAdContainer/Loadable';
// import UserForgotPassword from '../../components/UserForgotPassword';

// export default function App() {
//   return (
//     <div>

//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/user" component={User} />
//         <Route path="/report" component={Report} />
//         <Route path="/campaign" component={ListCampaigns} />
//         <Route path="/advertiser" component={ListAdvertisers} />
//         <Route path="/ad" component={ListAds} />
//         <Route path="/site" component={ListSites} />
//         <Route path="/tag" component={ListTags} />
//         <Route path="/network" component={ListNetworks} />
//         <Route path="/pack" component={ListPacks} />
//         <Route path="/account" component={UserMyAccount} />
//         <Route path="/resetpassword" component={UserResetPassword} />
//         <Route path="/newad" component={NewAd} />
//         <Route path="/forgot-password" component={UserForgotPassword} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import routes from '../../routes';


export default class App extends React.PureComponent {
  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.url}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>
  };
  render() {
    return (
      <Router>
        <div>
          {this.showContent(routes)}
        </div>
      </Router>
    );
  }

}
