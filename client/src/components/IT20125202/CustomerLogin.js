import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class CustomerLogin extends Component {
    componentDidMount() {
        localStorage.removeItem('userToken');
        document.title = "Customer Login"
    }

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
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
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:5000/customer/login', {
            email: user.email,
            password: user.password
        }).then(res => {
            alert("Login successful!")
            localStorage.setItem('userToken', res.data)
            this.props.history.push(`/customer/home`)
            window.location.reload();
        }).catch(err => {
            console.log(err);
            alert('Please check your username and password')
        })
    }


    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'white', paddingBottom: '100px', paddingTop: '50px', paddingLeft: '100px', paddingRight: '100px' }}>
                    <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Online Hotel Reservation System</h1>
                    <hr />
                    <div className="col-md-8 mt-4 mx-auto">
                        <br />
                        <h3 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}>Customer Login</h3>

                        <form className="needs-validation" noValidate>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Please enter your email"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />

                            </div>
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Please enter the password"
                                    required
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />

                            </div>


                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-outline-primary"
                                    type="submit"
                                    style={{ marginTop: '15px', width: 'cover' }}
                                    onClick={this.onSubmit}
                                >
                                    Login
                                </button>
                                <a href='/customer/register'> Not a registered user</a>
                                <a style={{textAlign: "right"}} href='/'> Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
