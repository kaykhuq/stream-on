/**
 *
 * NetworkContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectNetworkContainer, makeSelectKeyword } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import testData from './test_data';
import Content from '../../components/Content';
import SearchBar from '../../components/SearchBar';
import Delete from '../../components/Delete';
import AddEditNetworks from '../../components/AddEditNetworks';
import PanelPeople from '../../components/PanelPeople';
import { search } from './actions';


export class NetworkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: ''
    }
  }
  getAction = (action) => {
    this.setState({
      action: action
    })
  }

  render() {
    const { keyword, history } = this.props;
    // console.log(keyword);
    // search on table
    const data = testData.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return (
      <div>
        <Header history={history}>
          <TopHeader
            titleHeader="Inventory"
            btnMag="Manage Packs"
            btnFnc="New Network"
            breadcrumb=""
            id="add_network"
            href2=""
            getAction={this.getAction}
          />
        </Header>
        <Content >
          <SearchBar
            name="network"
            search={this.props.search}
          />
          <Delete name={testData[1].name} type="a network" />
          <AddEditNetworks
            id="add_network"
            type="Network"
            action={this.state.action === "New" ? "New" : "Edit"}
          />
          <PanelPeople
            data={data}
            id="add_network"
            getAction={this.getAction}
          />
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link">1</a></li>
              <li className="page-item"><a className="page-link">2</a></li>
              <li className="page-item"><a className="page-link">3</a></li>
              <li className="page-item"><a className="page-link">></a></li>
            </ul>
          </nav>
        </Content>
      </div>
    );
  }
}

NetworkContainer.propTypes = {
  // id:PropTypes.number.isRequired,
  // name:PropTypes.string.isRequired,
  // option1:PropTypes.string.isRequired,
  // option2:PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  keyword: makeSelectKeyword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    search: (keyword) => dispatch(search(keyword)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'networkContainer', reducer });
const withSaga = injectSaga({ key: 'networkContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NetworkContainer);
