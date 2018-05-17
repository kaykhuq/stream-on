/**
*
* AddCampaign
*
*/

import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
// import styled from 'styled-components';


class AddCampaign extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onOk = this.onOk.bind(this);
    }

    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onOk(value) {
        console.log('onOk: ', value);
    }
    onhandleChange = (e) => {
        var target = this.target;
        var name = this.name;
        var value = this.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div className="modal fade popup_add" tabIndex="-1" role="dialog" id="add_campaign">
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
                        <h2 className="pt-4">{this.props.action} campaign</h2>
                    </div>
                    <div className="modal-content">
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body">
                                <div className="form-group margin_bot">
                                    <label className="d-flex justify-content-start">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="campaign name..."
                                        onChange={this.onhandleChange}
                                    />
                                </div>
                                <div className="form-group margin_bot">
                                    <label className="d-flex justify-content-start">Advertiser</label>
                                    <select id="select_advertiser" className="form-control text-muted">
                                        <option value="0" defaultValue>select an advertiser...</option>
                                        <option value="1" title="Food retail and sevice">Carrefour</option>
                                        <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                                    </select>
                                </div>
                                <div className="form-group margin_bot">
                                    <label className="d-flex justify-content-start">Salesperson</label>
                                    <select id="select_salesperson" className="form-control text-muted">
                                        <option value="0" defaultValue>select a salesperson...</option>
                                        <option value="1" title="Food retail and sevice">Carrefour</option>
                                        <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                                    </select>
                                </div>
                                <div className="form-group margin_bot">
                                    <label className="d-flex justify-content-start">Budget</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="budget"
                                        placeholder="budget..."
                                        onChange={this.onhandleChange}
                                    />
                                </div>
                                <div className="form-group margin_bot">
                                    <label className="d-flex justify-content-start">Status</label>
                                    <select name="select_status" className="form-control text-muted" id="">
                                        <option value="0" defaultValue>select a status...</option>
                                        <option value="1" title="Food retail and sevice">Carrefour</option>
                                        <option value="2" title="Food retail and sevice 2">Carrefour 2</option>
                                    </select>
                                </div>
                                <div className="form-group width50 margin_bot">
                                    <label className="d-flex justify-content-start">End date</label>
                                    <DatePicker
                                        showTime
                                        format="DD-MM-YYYY HH:mm:ss"
                                        placeholder="dd-mm-yyyy"
                                        onChange={this.onChange}
                                        onOk={this.onOk}
                                    />
                                </div>
                                <div className="form-group width50 margin_bot">
                                    <label className="d-flex justify-content-start">Start date</label>
                                    <DatePicker
                                        showTime
                                        format="DD-MM-YYYY HH:mm:ss"
                                        placeholder="dd-mm-yyyy"
                                        onChange={this.onChange}
                                        onOk={this.onOk}
                                    />
                                </div>
                            </div>

                        </form>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-danger btn-radius">VALIDATE</button>
                            <button type="button" className="btn btn-secondary btn-secondary2" data-dismiss="modal">CANCEL</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

AddCampaign.propTypes = {

};

export default AddCampaign;
