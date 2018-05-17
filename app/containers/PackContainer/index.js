/**
 *
 * PackContainer
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
import { makeSelectPackContainer, makeSelectKeyword, makeLoadPack } from './selectors';
import { search, loadPacks } from './actions';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import testData from './test_data';
import Content from '../../components/Content';
import SearchBar from '../../components/SearchBar';
import Delete from '../../components/Delete';
import AddEditPacks from '../../components/AddEditPacks';

import PanelPeople from '../../components/PanelPeople';

export class PackContainer extends React.Component {
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
    var { keyword, packs, onLoadPack,history } = this.props;
    // console.log(packs);
    // search on table
    var data = testData.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return (
      <div>
        <Header history={history} >
          <TopHeader titleHeader="Packs" btnMag="" btnFnc="New Pack"
            breadcrumb={
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Inventory</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Packs</li>
                </ol>
              </nav>
            }
            id="add_pack"
            getAction={this.getAction}
          />
        </Header>
        <Content >
          <SearchBar
            name="pack"
            search={this.props.search}
          />
          <Delete name={testData[1].name} type="a pack" />
          <AddEditPacks id="add_pack"
            type="Pack"
            action={this.state.action === "New" ? "New" : "Edit"} />
          <PanelPeople
            data={data}
            id="add_pack"
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

PackContainer.propTypes = {
  // id:PropTypes.number.isRequired,
  // name:PropTypes.string.isRequired,
  // option1:PropTypes.string.isRequired,
  // option2:PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  keyword: makeSelectKeyword(),
  packs: makeLoadPack(),
});

function mapDispatchToProps(dispatch) {
  return {
    search: (keyword) => dispatch(search(keyword)),
    onLoadPack: () => dispatch(loadPacks()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'packContainer', reducer });
const withSaga = injectSaga({ key: 'packContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PackContainer);
