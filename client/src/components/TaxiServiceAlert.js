import React, { Component } from 'react'

export default class TaxiServiceAlert extends Component {

  constructor(props) {
    super(props);

    this.state = {
      teleNo: ""
    };
  }

   componentDidMount() {
    
    this.setState({teleNo: this.props.match.params.id});
     
   }

  render() {
    return (
        <div className='container'><br/><br/>

        <div className='container p-3 mb-2 bg-light text-dark rounded' style={{width: "500px", height:"650px"}}>

            <h1> Choose a Ride </h1> <br/>
            <h5>Thank You! {this.state.teleNo}</h5>
            <h6> Your Appointment is Ready. We Send a SMS with Appoinment Details </h6>
            <br/>

            <a className="btn btn-dark" href={'/view/customer/hotels'}>
                <i></i>&nbsp;Back to Home Page
            </a>

            
        </div>
    </div>
    )
  }
}
