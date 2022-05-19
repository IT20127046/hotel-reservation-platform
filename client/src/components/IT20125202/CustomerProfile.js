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
            <div style={{ margin: '20px' }}>
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
                </div>
            {/* <div className="container" style={{padding: '50px 200px 50px 200px'}}>
                <div className='jumbotron mt-5'>
                    <div className='col-sm8 mx-auto'>
                        <h1 className='text-center'> Profile </h1>
                    </div>
                    <br/><br />
                    <table className='table col-md-6 mx-auto'>
                            <tbody>
                                <tr>
                                    <td><b>First Name</b></td>
                                    <td>{this.state.firstName}</td>
                                </tr>
                                <tr>
                                    <td><b>Last Name</b></td>
                                    <td>{this.state.lastName}</td>
                                </tr>
                                <tr>
                                    <td><b>NIC</b></td>
                                    <td>{this.state.NIC}</td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td>{this.state.email}</td>
                                </tr>                         
                                <tr>
                                    <td><b>Mobile Number</b></td>
                                    <td>{this.state.mobile}</td>
                                </tr>
                                <tr>
                                    <td><b>Country</b></td>
                                    <td>{this.state.country}</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div> */}
        </div>
        )
    }
}