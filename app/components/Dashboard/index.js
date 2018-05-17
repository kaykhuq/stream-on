/**
*
* Dashboard
*
*/

import React from 'react';
import avatar from '../../../vendor/images/avatar.jpg';
import TopAdvertiser from '../TopAdvertiser';
import TopSalePerson from '../TopSalePerson';
import TopCampaign from '../TopCampaign';
import TopSite from '../TopSite';
// import styled from 'styled-components';


class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      arrCampaign: [
        { name: "CARREFOUR", campaign: "Food", revenue: "100 000 €" },
        { name: "BMW", campaign: "Automobile", revenue: "40 000 €" },
        { name: "BAUME & MERCIER", campaign: "LUXE", revenue: "20 000 €" },
        { name: "CARREFOUR", campaign: "Food", revenue: "100 000 €" },
        { name: "BAUME & MERCIER", campaign: "LUXE", revenue: "20 000 €" },
      ]
    }
  }
  // handleCampaign(arrCampaign) {
  //   return this.state.arrCampaign.map(each => <TopCampaign name={each.name} campaign={each.campaign} revenue={each.revenue} />)
  // }
  render() {
    return (
      <div id="main-content">
        <div className="container">
          <div id="block-1" className="row line">
            <div className="col-sm-3 col-xs-6">
              <div className="revenue"></div>
              <h4>Revenue</h4>
              <p className="price">245 000 €</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="chart"></div>
              <h4>Forcasted Revenue</h4>
              <p className="price">328 000</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="image"></div>
              <h4>Impression</h4>
              <p className="price">10 000 000</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="speaker"></div>
              <h4>Campaigns</h4>
              <p className="price">203</p>
            </div>
          </div>
          <div id="block-2">
            <h3>Revenues</h3>
            <div id="chart_div"></div>
            <h3>Impressions</h3>
            <div id="column_chart_div"></div>
            <div className="row">
              <TopAdvertiser />
              <TopSalePerson />
            </div>
            <div className="row">
              <TopCampaign />
              <TopSite />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;
