import React, { Component } from 'react';
import NavBarAdmin from './NavBarAdmin';
import cushome from './cushome.jpg';

export default class SysAdminHome extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <div className='container-fluid' style={{backgroundImage: `url(${cushome})`, height:'100vh', backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
          <h1 style={{textAlign: "center", paddingTop: "50px"}}> Online Hotel Reservation Platform</h1>
        </div>
      </div>
    )
  }
}
