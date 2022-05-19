import React, { Component } from 'react'
import cushome from './cushome.jpg';

export default class LandingPage extends Component {
  render() {
    return (
    // <div class="container-fluid bg-secondary bg-gradient" style={{textAlign: "center", height: "100%"}}> 
    <div className='container-fluid' style={{backgroundImage: `url(${cushome})`, height:'100vh', backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
          <h1 style={{textAlign: "center", paddingTop: "50px"}}> Online Hotel Reservation Platform</h1>
        
          <br /><br /><br /><br /><br />

          <div class="container" style={{backgroundColor: 'white'}}>

                <div class="col-10"  style={{margin: "auto"}}>
                    <div class="p-3 border">
                        <a href="/customer/login" style={{width: "100%", border: "none"}} type="button" class="btn btn-outline-dark"> <p class="fw-bold fs-4"> For Customers </p></a>
                    </div>
                </div>
                <br /><br />
                <div class="col-10"  style={{margin: "auto"}}>
                    <div class="p-3 border">
                        <a href='/hotelAdminLogin' style={{width: "100%", border: "none"}} type="button" class="btn btn-outline-dark"><p class="fw-bold fs-4"> For Hotels </p></a>
                    </div>
                </div>
                <br /><br />
                <div class="col-10"  style={{margin: "auto"}}>
                    <div class="p-3 border">
                        <a href='/sysAdminLogin' style={{width: "100%", border: "none"}} type="button" class="btn btn-outline-dark"><p class="fw-bold fs-4"> For System Admin </p></a>
                    </div>
                </div>

          </div>

          <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
