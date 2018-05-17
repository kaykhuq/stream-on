/**
*
* AddEditTags
*
*/

import React from 'react';
import Select2 from 'react-select2-wrapper';

// import styled from 'styled-components';


class AddEditTags extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChange=(e)=> {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_tag">
          <div className="modal-dialog" role="document">
            <div className="modal-content ">
              <div className="modal-header d-flex justify-content-start">
                <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <i className="icon-arrow-left2"></i>
                </button>
                <h2 className="pt-5">{this.props.action} Tag</h2>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label className="d-flex justify-content-start">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tag name..."
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group ">
                      <label className="d-flex justify-content-start">Site</label>
                      <select id="inputRole" className="form-control text-muted">
                        <option value="0" defaultValue>select site</option>
                        <option value="1">select user role...</option>
                        <option value="2">select user role...</option>
                      </select>
                    </div>
                  <div className="form-group input-group">
                    <label className="d-flex justify-content-start">Site</label>
                    <Select2
                      multiple
                      options={{
                        placeholder: 'select tag',
                      }}
                      data={[
                        { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                        { text: 'Carrefour', id: 2 },
                        { text: 'Carrefour', id: 3 },
                        { text: 'Carrefour', id: 4 },
                      ]}
                    />

                  </div>

                </form>

              </div>
              <div className="modal-footer d-flex justify-content-start modalfooter2">
                <button type="submit" className="btn btn-danger btn-radius">VALIDATE</button>
                <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

AddEditTags.propTypes = {

};

export default AddEditTags;
