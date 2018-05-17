/**
*
* UserResetPassword
*
*/

import React from 'react';
import logos from '../../../vendor/images/logos.png';
// import styled from 'styled-components';


class UserResetPassword extends React.Component {

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
            <div className="login-page login-page-1">
                <div className="container">
                    <img src={logos} alt="" />
                    <form className="form-custom-1" onSubmit={this.onSubmit}>
                        <h1>Reset password</h1>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                placeholder="New password"
                                onChange={this.onhandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                onChange={this.onhandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-danger btn-radius btn-padding"
                            >
                                RESET PASSWORD
                            </button>
                            <a href="/">Back to sign in</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

UserResetPassword.propTypes = {

};

export default UserResetPassword;
