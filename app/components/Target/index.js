/**
*
* Target
*
*/

import React from 'react';
import Select2 from 'react-select2-wrapper';
import AddGeolocation from '../AddGeolocation';
import computer from '../../../vendor/images/computer.png';
import mobile from '../../../vendor/images/mobile.png';
import InputRange from 'react-input-range';
import '../../../node_modules/react-input-range/lib/css/input-range/input-range.css';
// import styled from 'styled-components';


class Target extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { value: { min: 17, max: 20 }, };
  }
  render() {
    return (
      <div className="general-tab" id="general">
        <div className="header">
          <h4>Step 4 of 4</h4>
          <h1>Targeting</h1>
        </div>
        <div className="content">
          <form>
            <div className="left">
              <div className="form-group select_image">
                <label htmlFor="platform">Select platform</label>
                <p className="sub-title">quod si rectum</p>
                <div name="select_platform" className="select_image" id="">
                  <img value="1" data-subtitle="Quod si rectum stauerimus" title="computer" className="px-5" src={computer}/>
                  <img value="2" data-subtitle="Quod si rectum stauerimus" title="mobile" className="px-5" src={mobile}/>
                  <img value="3" data-subtitle="Quod si rectum stauerimus" title="mobile"  className="px-5" src={mobile}/>
                  <img value="4" data-subtitle="Quod si rectum stauerimus" title="mobile" className="px-5" src={mobile}/>
                </div>
                <div className="creative_category_div"></div>
              </div>
              <div className="form-group">
                <label>Keywords</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select keyword',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <label>Internet connection type</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select type',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <label>SDK version</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select SDK version',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <label>Device model</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select model',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <label>Device OS</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select OS',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <label>IP addresses</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select address',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <label>Countries</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select country',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <label>Cities</label>
                <p className="sub-title">quod si rectum</p>
                <Select2
                  multiple
                  options={{
                    placeholder: 'select city',
                  }}
                  data={[
                    { text: 'Carrefour', id: 1, title: "Food retail and sevice" },
                    { text: 'Carrefour', id: 2 },
                    { text: 'Carrefour', id: 3 },
                    { text: 'Carrefour', id: 4 },
                  ]}
                />
              </div>
              <div className="form-group">
                <div className="control-label">
                  <div className="pull-left">
                    <label>Geolocation</label>
                    <p className="sub-title">quod si rectum</p>
                  </div>
                  <div className="pull-right">
                    <button type="button" className="add-filter btn btn-primary btn-radius2" data-toggle="modal" data-target="#add_geolocation">+</button>
                  </div>
                </div>
                <div className="geolocation_result">
                  <div className="result">
                    <h5>10 lipsum</h5>
                    <p>48.4566841685,156.554585888</p>
                  </div>
                  <div className="result">
                    <h5>10 lipsum</h5>
                    <p>48.4566841685,156.554585888</p>
                  </div>
                  <div className="result">
                    <h5>10 lipsum</h5>
                    <p>48.4566841685,156.554585888</p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Hour parting</label>
                <p className="sub-title">quod si rectum</p>
                <InputRange
                  maxValue={22}
                  minValue={15}
                  value={this.state.value}
                  onChange={value => this.setState({ value })} />
              </div>
              <div className="form-group radios">
                <label>Days parting</label>
                <p className="sub-title">quod si rectum</p>
                <div className="form-controls">
                  <input type="checkbox" name="optradio" id="option-1" />
                  <label className="radio-inline" htmlFor="option-1">Monday</label>
                  <input type="checkbox" name="optradio" id="option-2" />
                  <label className="radio-inline" htmlFor="option-2">Tueday</label>
                  <input type="checkbox" name="optradio" id="option-3" />
                  <label className="radio-inline" htmlFor="option-3">Thursday</label>
                  <input type="checkbox" name="optradio" id="option-4" />
                  <label className="radio-inline" htmlFor="option-4">Wednesday</label>
                  <input type="checkbox" name="optradio" id="option-5" />
                  <label className="radio-inline" htmlFor="option-5">Friday</label>
                  <input type="checkbox" name="optradio" id="option-6" />
                  <label className="radio-inline" htmlFor="option-6">Saturday</label>
                  <input type="checkbox" name="optradio" id="option-7" />
                  <label className="radio-inline" htmlFor="option-7">Sunday</label>
                </div>
              </div>
            </div>
            <div className="form-group-button">
              <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger btn-radius">Next</button>
            </div>
          </form>
        </div>
        <AddGeolocation />
      </div>
    );
  }
}

Target.propTypes = {

};

export default Target;
