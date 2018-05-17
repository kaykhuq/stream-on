/**
*
* HomePageSignIn
*
*/

import React from 'react';
import logos from '../../../vendor/images/logos.png';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import styled from 'styled-components';


class HomePageSignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
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
            <div className="login-page login-page-1 ">
                <div className="container">
                    <img src={logos} alt="" />
                    <form className="form-custom-1" onSubmit={this.onSubmit}>
                        <h1>Sign in</h1>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                                onChange={this.onhandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                aria-describedby="password"
                                placeholder="Password"
                                onChange={this.onhandleChange}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <Link to="/dashboard"><button type="button" className="btn btn-danger btn-radius btn-padding" >SIGN IN</button></Link>
                            <a href="forgot-password">Forgot password ?</a>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

HomePageSignIn.propTypes = {

};

export default HomePageSignIn;
