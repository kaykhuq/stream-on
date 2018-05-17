/**
*
* Modal UserEditPassword
*
*/

import React from 'react';
// import styled from 'styled-components';


class UserEditPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
    onhandleChange = (e) => {
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
                <div className="modal fade popup_add" tabIndex="-1" role="dialog" id={this.props.id}>
                    <div className="modal-dialog" role="document">
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"><i className="icon-arrow-left2"></i></button>
                        <div className="modal-header">
                            <h2 className="pt-5">Edit password</h2>
                        </div>
                        <div className="modal-content">
                            <form className="form-left" onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <label>Current password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="currentPassword"
                                        placeholder="current password..."
                                        onChange={this.onhandleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>New password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="newPassword"
                                        placeholder="new password..."
                                        onChange={this.onhandleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm password</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="confirm password..."
                                        onChange={this.onhandleChange}
                                    />
                                </div>
                            </form>

                            <div className="modal-footer d-flex justify-content-start">
                                <button type="submit" className="btn btn-danger btn-radius">VALIDATE</button>
                                <button type="button" className="btn btn-secondary btn-secondary2 btn-radius" data-dismiss="modal">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UserEditPassword.propTypes = {

};

export default UserEditPassword;
