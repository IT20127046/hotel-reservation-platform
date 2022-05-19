// user- view user profile
import React, { Component } from 'react';
import NavBarCus from './NavBarCus'
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default class CustomerProfile extends Component {

    constructor(){
        super();
        this.state = {
            _id: "",
            firstName: "",
            lastName: "",
            NIC: "",
            email: "",
            mobile: "",
            country: ""
        }
    }

    handleInputChange = (e) => {

        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
    
        const _id = this.state._id;
    
        const { firstName, lastName, NIC, email, mobile, country } = this.state;
    
        const data = {
            firstName: firstName,
            lastName: lastName, 
            NIC: NIC, 
            email: email, 
            mobile: mobile, 
            country: country
        }
    
    
        axios.put(`http://localhost:5000/customer/update/${_id}`, data).then((res) => {
          if (res.data.success) {
            alert("User details updated successfully.. You may need to login again to see the changes");
            this.props.history.push(`/customer/profile`)
            window.location.reload();
          }
        })
      }

    componentDidMount(){
        document.title = "Update Customer Profile"

        const usertoken = localStorage.userToken;
        const decoded = jwt_decode(usertoken);
        this.setState ({
            _id: decoded._id,
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
            <div className='col-md-8 mt-4 mx-auto'>
          <h1 className='h3 mb-3 font-weight-normal'>Update Profile</h1>

          <form className='needs-validation' noValidate>
            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>First Name</label>
              <input
                type="text"
                className='form-control'
                name="firstName"
                placeholder=""
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Last Name</label>
              <input
                type="text"
                className='form-control'
                name="lastName"
                placeholder=""
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>NIC</label>
              <input
                type="text"
                className='form-control'
                name="NIC"
                placeholder=""
                value={this.state.NIC}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Email</label>
              <input
                type="email"
                className='form-control'
                name="email"
                placeholder=""
                value={this.state.email}
                onChange={this.handleInputChange}
                readOnly
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Mobile</label>
              <input
                type="text"
                className='form-control'
                name="mobile"
                placeholder=""
                value={this.state.mobile}
                onChange={this.handleInputChange}
              />
            </div>

            <div className='form-group' style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '5px' }}>Country</label>
              <input
                type="text"
                className='form-control'
                name="country"
                placeholder=""
                value={this.state.country}
                onChange={this.handleInputChange}
              />
            </div>

            <button className='btn btn-success' type="submit" style={{ maeginTop: '15px' }} onClick={this.onSubmit}>
              <i className='far fa-check-square'></i>
              &nbsp; Update
            </button>
            &nbsp;&nbsp;
            <a
              href="/customer/profile"
              class="btn btn-outline-success"
              tabindex="-1"
              role="button"
              aria-disabled="true">
              Back
            </a>

          </form>

        </div>
      </div>
        )
    }
}