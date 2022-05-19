import React, { Component } from 'react'

export default class TaxiServiceAlert extends Component {
  render() {
    return (
        <div className='container'><br/><br/>

        <div className='container p-3 mb-2 bg-light text-dark rounded' style={{width: "500px", height:"650px"}}>

            <h1> Choose a Ride </h1> <br/>
            <h6> Your Appointment Ready </h6>

            <a className="btn btn-dark" href={'/view/customer/hotels'}>
                <i></i>&nbsp;Back to Home Page
            </a>

            
        </div>
    </div>
    )
  }
}
