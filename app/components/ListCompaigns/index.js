/**
*
* ListCompaigns
*
*/

import React from 'react';
import SearchBar from '../SearchBar';
import ListCompaignsData from '../ListCompaignsData';
// import styled from 'styled-components';


class ListCompaigns extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      datas: [
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "success", status: "Validated"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "warning", status: "Pending"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "default", status: "Canceled"
        },
        {
          name: "Dior men spring 20", advertiser: "L'OREAL", startdate: "11/07/2017", enddate: "11/07/2017",
          budget: "10 000 €", impression: "200 000", click: "200 000", ctr: "2%", success: "warning", status: "Pending"
        },
      ]

    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value })
  }
  dataRender() {
    return this.state.datas.map(data => (<ListCompaignsData name={data.name} advertiser={data.advertiser}
      startdate={data.startdate} enddate={data.enddate} budget={data.budget} impression={data.impression}
      click={data.click} ctr={data.ctr} success={data.success} status={data.status} type="Compaign" />));
  }
  render() {
    return (
      <div className="list-view container col-xl pt-4">
        <div className="row view-view">
          <form className="form-inline">
            <SearchBar handleChange={this.state.handleChange} name="compaign" />
          </form>
          <div className="col-auto">
            <div className="input-group">
              <div className="input-group-prepend ">
                <div className="input-group-text bg_trans disabled">STATUS</div>
              </div>
              <select id="inputState" className="form-control border-left-0 ">
                <option value="1" title="Status">Validated</option>
                <option value="2" title="Status">Pending</option>
                <option value="3" title="Status">Un-Validate</option>
              </select>
            </div>
          </div>

        </div>
        <div className="row view-view">
          <table id="datatable" className="table table-hover ">
            <thead className="border_border">
              <tr>
                <th >Name</th>
                <th >Advertiser</th>
                <th >Start Date</th>
                <th >End Date</th>
                <th >Budget</th>
                <th >Impressions</th>
                <th >Clicks</th>
                <th >Ctr</th>
                <th >Status</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
              {this.dataRender()}
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">></a></li>
          </ul>
        </nav>
      </div>

    );
  }
}

ListCompaigns.propTypes = {

};

export default ListCompaigns;
