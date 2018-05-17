/**
*
* UserMyAccount
*
*/

import React from 'react';
import img1 from '../../../vendor/images/img1.jpg';
import UserEditPassword from '../UserEditPassword';
// import styled from 'styled-components';
const bgstyle = {
    backgroundImage: 'url(' + img1 + ')',
};

class UserMyAccount extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = { firstname: '', lastname: '', email: '' }
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
            <div className="profile-page pt-4">
                <div className="container ">
                    <div className="avatar text-center d-flex justify-content-center">
                        <div className="background-cover mb-0" style={bgstyle}>
                            <i className="icon-pencil"></i>
                        </div>
                    </div>
                    <form className="login-page login-page-1" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputFirstName"
                                        placeholder="first name..."
                                        onChange={this.onhandleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputPassword"
                                        placeholder="last name..."
                                        onChange={this.onhandleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="InputEmail"
                                        placeholder="samuelkerboeuf@blink.com"
                                        onChange={this.onhandleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary btn-secondary2" data-toggle="modal" data-target="#edit_password">Edit password</button>
                            <button type="button" className="btn btn-danger btn-radius btn-right ">VALIDATE</button>
                        </div>
                    </form>
                </div>
                <UserEditPassword id="edit_password" />
            </div>


        );
    }
}

UserMyAccount.propTypes = {

};

export default UserMyAccount;
