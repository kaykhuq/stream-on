/**
*
* Modal Delete
*
*/

import React from 'react';
import multiply from '../../../vendor/images/multiply.png';
// import styled from 'styled-components';

class Delete extends React.Component { // eslint-disable-line react/prefer-stateless-function

componentWillMount(){

}

  render() {
    // console.log(this.props.act);
    const {type, name} = this.props;
    return (
      <div>
        <div className="modal fade" tabIndex="-1" role="dialog" id="delete"
          aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog center_modal modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <img src={multiply} />
                <h2>Delete {type}</h2>
                <div>
                  <p>Are you sure to delete <b>{name}</b></p>
                  <p>This action is irreversible</p>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary btn-secondary2"
                  data-dismiss="modal"
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-radius"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Delete.propTypes = {

};

export default Delete;
