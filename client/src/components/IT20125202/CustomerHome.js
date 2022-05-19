import React, { Component } from 'react';
import NavBarCus from './NavBarCus';
import jwt_decode from 'jwt-decode';
import cushome from './cushome.jpg'

export default class CustomerHome extends Component {

  constructor(){
    super();
    this.state = {
        firstName: "",
        lastName: ""
    }
}

  componentDidMount(){
    document.title = "Customer Home"

    const usertoken = localStorage.userToken;
    const decoded = jwt_decode(usertoken);
    this.setState ({
        firstName: decoded.firstName,
        lastName: decoded.lastName
    })
}

  render() {
    return (
        
        <div>
          <NavBarCus />
          <div style={{textAlign:"right", marginRight: "10px"}}>
            <h4>{this.state.firstName} {this.state.lastName}</h4>
          </div>
          <div className='container-fluid' style={{backgroundImage: `url(${cushome})`, height:'100vh', backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
          <h1 style={{textAlign: "center", paddingTop: "50px"}}> Online Hotel Reservation Platform</h1>
        </div>
          
        </div>
    )
  }
}
