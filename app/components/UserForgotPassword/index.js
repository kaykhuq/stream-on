/**
*
* UserForgotPassword
*
*/

import React from 'react';
import logos from '../../../vendor/images/logos.png';
// import styled from 'styled-components';


class UserForgotPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
            <div id="main-content">
                <div className="login-page login-page-1">
                    <div className="container">
                        <img src={logos} alt="" />
                        <form className="form-custom-1" onSubmit={this.onSubmit}>
                            <h1 className="fontsize2">Forgot password ?</h1>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="forgotEmail"
                                    placeholder="Email"
                                    onChange={this.onhandleChange}
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-danger btn-radius btn-padding">Send</button>
                                <a href="/">Back to sign in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

UserForgotPassword.propTypes = {

};

export default UserForgotPassword;
