//customer registration
import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCustomer extends Component {

  componentDidMount() {
    localStorage.removeItem('userToken');
    document.title = "Customer Registration"
  }

  constructor() {
    super();

    this.state = {
        firstName: "",
        lastName: "",
        NIC: "",
        email: "",
        mobile: "",
        country: "",
        password: ""
    }

    //to handle the state changes
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        NIC: this.state.NIC,
        email: this.state.email,
        mobile: this.state.mobile,
        country: this.state.country,
        password: this.state.password
    }

    axios.post('http://localhost:5000/customer/registration', user)
        .then(res => {
            if (res.data.success) {
                window.alert('Registered successfully!');
                this.props.history.push(`/customer/login`)
                window.location.reload();
            }
        })
        .catch(err => {
            return err
        })
    // userRegister(user).then(res => {

    //   if (res) {
    //     this.props.history.push(`/user/login`)
    //     window.location.reload();
    //   }
    // })
  }

  render() {
    return (
      <div>

        <div className="container" style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px' }}>
          <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Online Hotel Reservation Platform</h1>
          <hr />
          <div className="col-md-8 mt-4 mx-auto">
            <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: 'center' }}>Customer Registration</h1>

            <form className='needs-validation' noValidate>
              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>First Name</label>
                <input
                  type="text"
                  className='form-control'
                  name="firstName"
                  placeholder="Enter your First Name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Last Name</label>
                <input
                  type="text"
                  className='form-control'
                  name="lastName"
                  placeholder="Enter your Last Name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>NIC</label>
                <input
                  type="NIC"
                  className='form-control'
                  name="NIC"
                  placeholder="Enter your National Identity Card Number"
                  value={this.state.NIC}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input
                  type="email"
                  className='form-control'
                  name="email"
                  placeholder="Enter a email address that you are currently using"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Mobile</label>
                <input
                  type="mobile"
                  className='form-control'
                  name="mobile"
                  placeholder="Enter your Mobile Number"
                  value={this.state.mobile}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Country</label>
                <input
                  type="country"
                  className='form-control'
                  name="country"
                  placeholder="Enter your Country"
                  value={this.state.country}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='form-group' style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Password</label>
                <input
                  type="password"
                  className='form-control'
                  name="password"
                  placeholder="Enter a new password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary" type="submit" style={{ marginTop: '15px', width: 'cover' }} onClick={this.onSubmit}>
                  <i className='far fa-check-square'></i>
                  &nbsp; Register
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}