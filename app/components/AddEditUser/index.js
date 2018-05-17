/**
*
* AddEditUser
*
*/

import React from 'react';
// import styled from 'styled-components';


class AddEditUser extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = { firstname: '', lastname: '', email: '' };
    }
    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="modal fade popup_add" tabIndex="-1" role="dialog" id={this.props.id} >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header d-flex justify-content-start">
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="icon-arrow-left2"></i>
                                </button>
                                <h2 className="pt-5">{this.props.action} {this.props.type}</h2>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="modal-content">
                                        <div className="form-group margin_bot">
                                            <label className="d-flex justify-content-start">First name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="InputFirstName"
                                                placeholder="First name..."
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group margin_bot">
                                            <label className="d-flex justify-content-start">Last name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="InputLastName"
                                                placeholder="Last name..."
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group margin_bot">
                                            <label className="d-flex justify-content-start">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="InputEmail"
                                                placeholder="Email..."
                                                onChange={this.handleChange}
                                            />
                                        </div>

                                        <div className="form-group ">
                                            <label className="d-flex justify-content-start">Role</label>
                                            <select id="inputRole" className="form-control text-muted">
                                                <option value="0" defaultValue>select user role...</option>
                                                <option value="1">select user role...</option>
                                                <option value="2">select user role...</option>
                                            </select>
                                        </div>
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

AddEditUser.propTypes = {

};

export default AddEditUser;
