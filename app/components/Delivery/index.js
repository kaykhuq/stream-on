/**
*
* Delivery
*
*/

import React from 'react';
import Select2 from 'react-select2-wrapper';
// import styled from 'styled-components';


class Delivery extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="general-tab" id="delivery">
        <div className="header">
          <h4>Step 2 of 4</h4>
          <h1>Delivery</h1>
        </div>
        <div className="content">
          <form>
            <div className="left">
              <div className="form-group">
                <label htmlFor="pack">Select packs</label>
                <div className="filter_group_by">

                  <Select2
                    multiple
                    options={{
                      placeholder: 'select pack',
                    }}
                    data={[
                      { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                      { text: 'Carrefour', id: 2 },
                      { text: 'Carrefour', id: 3 },
                      { text: 'Carrefour', id: 4 },
                    ]}
                  />


                </div>
              </div>
              <div className="form-group">
                <label htmlFor="sitetag">Select sites and tags</label>
                <Select2
                  multiple
                  data={[
                    {
                      label: 'Swedish Cars',
                      children: [
                        { text: 'Carrefour', id: 1 },
                        { text: 'Carrefour 2', id: 2 },
                      ],
                    },
                    {
                      label: 'Swedish Cars',
                      children: [
                        { text: 'Carrefour', id: 1 },
                        { text: 'Carrefour 2', id: 2 },
                      ],
                    },
                    { label: 'discussion', id: 4 },
                  ]}
                  options={{
                    placeholder: 'select site and tag',
                  }}
                />
                {/* <select name="role_select" className="form-control" id="" multiple>
                  <optgroup title="Food retail and sevice" label="Swedish Cars">
                    <option value="volvo" title="Food retail and sevice">Carrefour</option>
                    <option value="saab" title="Food retail and sevice">Carrefour 2</option>
                  </optgroup>
                  <optgroup title="Food retail and sevice" label="German Cars">
                    <option value="mercedes" title="Food retail and sevice">Carrefour</option>
                    <option value="audi" title="Food retail and sevice">Carrefour 2</option>
                  </optgroup>
                  <option value="audi123456" title="Food retail and sevice">audi123456</option>
                </select> */}
              </div>
            </div>
            <div className="form-group-button">
              <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
              <button type="button" className="btn btn-danger btn-radius">NEXT</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Delivery.propTypes = {

};

export default Delivery;
