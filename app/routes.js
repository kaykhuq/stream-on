// export default {
//   items: [
//     {
//       name: 'Dashboard',
//       exact: true,
//       url: '/dashboard',
//     },
//     {
//       name: 'Campaigns',
//       exact: false,
//       url: '/campaign',
//     },
//     {
//       name: 'Advertiser',
//       exact: false,
//       url: '/advertiser',
//     },
//     {
//       name: 'Ads',
//       exact: false,
//       url: '/ad',
//     },
//     {
//       name: 'Inventory',
//       exact: false,
//       url: '/network',
//     },
//     {
//       name: 'Packs',
//       exact: false,
//       url: '/pack',
//     },
//     {
//       name: 'Users',
//       exact: false,
//       url: '/user',
//     },
//     {
//       name: 'Reports',
//       exact: false,
//       url: '/report',
//     },
//     {
//       name: 'Sites',
//       exact: false,
//       url: '/site',
//     },
//     {
//       name: 'Tags',
//       exact: false,
//       url: '/tag',
//     },
//     {
//       name: 'Account',
//       exact: false,
//       url: '/account',
//     },
//     {
//       name: 'Resetpassword',
//       exact: false,
//       url: '/reset-password',
//     },
//     {
//       name: 'Newad',
//       exact: false,
//       url: '/newad',
//     },
//   ]
// };


import React from 'react';

import HomePageSignIn from "./components/HomePageSignIn";
import Campaigns from "./containers/Campaigns/Loadable";
import AdvertiserContainer from "./containers/AdvertiserContainer/Loadable";
import DashboardContainer from "./containers/DashboardContainer/Loadable";
import AdsContainer from "./containers/AdsContainer/Loadable";
import NetworkContainer from "./containers/NetworkContainer/Loadable";
import PackContainer from "./containers/PackContainer/Loadable";
import UserContainer from "./containers/UserContainer/Loadable";
import ReportContainer from "./containers/ReportContainer/Loadable";
import SiteContainer from "./containers/SiteContainer/Loadable";
import TagContainer from "./containers/TagContainer/Loadable";
import AccountContainer from "./containers/AccountContainer/Loadable";
import UserResetPassword from "./components/UserResetPassword";
import NewAdContainer from "./containers/NewAdContainer/Loadable";
import NotFoundPage from "./containers/NotFoundPage/Loadable";

const routes = [
  {
    main: () => <HomePageSignIn />,
    exact: true,
    url: '/',
  },
  {
    main: ({history}) => <DashboardContainer history={history} />,
    exact: false,
    url: '/dashboard',
  },
  {
    main: ({history}) => <Campaigns history={history}/>,
    exact: true,
    url: '/campaign',
  },
  {
    main: ({history}) => <AdvertiserContainer history={history}/>,
    exact: false,
    url: '/campaign/advertiser',
  },
  {
    main: ({history}) => <AdsContainer history={history}/>,
    exact: false,
    url: '/campaign/ad',
  },
  {
    main: ({history}) => <NewAdContainer history={history}/>,
    exact: false,
    url: '/campaign/ad/newad',
  },
  {
    main: ({history}) => <NetworkContainer history={history}/>,
    exact: false,
    url: '/inventory/network',
  },
  {
    main: ({history}) => <PackContainer history={history}/>,
    exact: false,
    url: '/inventory/pack',
  },
  {
    main: ({history}) => <SiteContainer history={history}/>,
    exact: false,
    url: '/inventory/site',
  },
  {
    main: ({history}) => <TagContainer history={history}/>,
    exact: false,
    url: '/inventory/tag',
  },
  {
    main: ({history}) => <UserContainer history={history}/>,
    exact: false,
    url: '/user',
  },
  {
    main: ({history}) => <ReportContainer history={history}/>,
    exact: false,
    url: '/report',
  },

  {
    main: ({history}) => <AccountContainer history={history}/>,
    exact: false,
    url: '/account',
  },
  {
    main: ({history}) => <UserResetPassword history={history}/>,
    exact: false,
    url: '/reset-password',
  },
  {
    main: () => <NotFoundPage />,
    exact: false,
    url: '',
  },
];


export default routes;
