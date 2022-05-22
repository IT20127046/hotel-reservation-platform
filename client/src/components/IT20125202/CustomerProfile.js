// user- view user profile
import React, { Component } from 'react';
import NavBarCus from './NavBarCus'
import jwt_decode from 'jwt-decode';

export default class CustomerProfile extends Component {

    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            NIC: "",
            email: "",
            mobile: "",
            country: ""
            // password: ""
        }
    }

    componentDidMount(){
        document.title = "Customer Profile"

        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);
        this.setState ({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            NIC: decoded.NIC,
            email: decoded.email,
            mobile: decoded.mobile,
            country: decoded.country
        })
    }

    render() {
        return (
        <div>
            <NavBarCus />
            <div style={{ margin: '50px' }}>
                    <h3>User Details</h3>
                    <hr />

                    <dl className='row'>
                        <dt className='col-sm-3'>First Name</dt>
                        <dd className='col-sm-9'>{this.state.firstName}</dd>

                        <dt className='col-sm-3'>Last Name</dt>
                        <dd className='col-sm-9'>{this.state.lastName}</dd>

                        <dt className='col-sm-3'>NIC</dt>
                        <dd className='col-sm-9'>{this.state.NIC}</dd>
                        
                        <dt className='col-sm-3'>Email</dt>
                        <dd className='col-sm-9'>{this.state.email}</dd>

                        <dt className='col-sm-3'>Mobile Number</dt>
                        <dd className='col-sm-9'>{this.state.mobile}</dd>

                        <dt className='col-sm-3'>Country</dt>
                        <dd className='col-sm-9'>{this.state.country}</dd>
                    </dl>
                    <div className="d-grid gap-2">
                    <a style={{textAlign: "left"}} href='/customer/update'> Update Profile</a>
                </div>
                </div>
                <br />
        </div>
        )
    }
}