/**
 *
 * UserContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserContainer, { makeSelectKeyword } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Header from '../../components/Header';
import TopHeader from '../../components/TopHeader';
import { loadUsers, search } from './actions';
import AddEditUser from '../../components/AddEditUser';
import testData from './test_data';
import Content from '../../components/Content';
import SearchBar from '../../components/SearchBar';
import Delete from '../../components/Delete';
import PanelPeople from '../../components/PanelPeople';

export class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: ''
    }
  }

  componentDidMount() {
    this.props.loadUsers();
  }
  getAction = (action) => {
    this.setState({
      action: action
    })
  }
  onFilter = (name) => {
    // console.log(name)
  }

  render() {
    var { keyword,history } = this.props;
    // search on table
    var data = testData.filter((item) => {
      return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return (
      <div>
        <Header history={history}>
          <TopHeader
            titleHeader="Users"
            btnMag=""
            btnFnc="New User"
            breadcrumb=""
            id="add_user"
            getAction={this.getAction}
          />
        </Header>
        <Content >
          <SearchBar
            name="user"
            onFilter={this.onFilter}
            search={this.props.search}
          />

          <PanelPeople
            data={data}
            id="add_user"
            getAction={this.getAction}
          />
          <Delete name={testData[1].name} type="an user" />
          <AddEditUser id="add_user" type="User" action={this.state.action === "New" ? "New" : "Edit"} />
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

UserContainer.propTypes = {
  loadUsers: PropTypes.func,
  isLogin: PropTypes.bool,
  // account:PropTypes.object,
  // id:PropTypes.number.isRequired,
  // name:PropTypes.string.isRequired,
  // option1:PropTypes.string.isRequired,
  // option2:PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  ///users: makeSelectUserContainer(),
  keyword: makeSelectKeyword(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
    search: (keyword) => dispatch(search(keyword)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userContainer', reducer });
const withSaga = injectSaga({ key: 'userContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserContainer);
