/**
*
* AddFilter
*
*/

import React from 'react';
import Select2 from 'react-select2-wrapper';
// import styled from 'styled-components';


class AddFilter extends React.Component {
  onSubmit=(e)=>{
    e.preventDefault();
  }
  render() {
    return (
      <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_filter">
        <div className="modal-dialog" role="document">
          <div className="modal-header d-flex justify-content-start">
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon-arrow-left2"></i>
            </button>
            <h2 className="pt-4">{this.props.action} filter</h2>
          </div>
          <div className="modal-content">
            <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="filterby" className="d-flex justify-content-start">Filter by</label>
                  <select id="select_filter" className="form-control text-muted">
                    <option value="0" defaultValue>select filter...</option>
                    <option value="1" >Value 1</option>
                    <option value="2" >Value 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="saleperson" className="d-flex justify-content-start">Sale person</label>
                  <Select2
                    multiple
                    options={{
                      placeholder: 'select sale person',
                    }}
                    data={[
                      { text: 'CARREFOUR', id: 1, title: "Food retail and sevice" },
                      { text: 'CARREFOUR', id: 2 },
                      { text: 'CARREFOUR', id: 3 },
                      { text: 'CARREFOUR', id: 4 },
                    ]}
                  />
                </div>

              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-danger btn-radius">VALIDATE</button>
                <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddFilter.propTypes = {

};

export default AddFilter;
