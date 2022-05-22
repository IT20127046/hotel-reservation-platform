import React, { Component } from "react";
import axios from 'axios';

export default class BookTaxi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            teleNo: "",
            msg: "Hotel Room Reserverd",
            subject:"Payment Details",
            message:"We have successfully received your payment. Thank You"
        }; 
     
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        });
      };
    
      handleChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        });
      };

    onSubmit = (e) => {
        e.preventDefault();

        const {msg, email, teleNo, subject, message } = this.state;
    
        // Send data to SMS Service
        const msgData = {
            sendmsg: msg,
            teleNo: teleNo
          
        };

        axios.post("http://localhost:5000/sms/send", msgData).then((res) => {
        if (res.data.success) {
            console.log('SMS Send Successfull');
        }
        });

        // Send data to Email Service
        const emailData = {
          
            email: email,
            subject: subject,
            message: message,



        };

        axios.post("http://localhost:5000/email/save", emailData).then((res) => {
        if (res.data.success) {
            console.log('Email Sent Successfull');
        }
        });




           // Send data to Email Service
           const emailDataSave = {
          
            email: email,
            subject: subject,
            message: message,



        };

        axios.post("http://localhost:5000/api/email", emailDataSave).then((res) => {
        if (res.data.success) {
            console.log('Email Sent Successfull');
        }
        });
    }

  render() {
    return (
      <div className="container">
        <br />
        <br />

        <div
          className="container p-3 mb-2 bg-light text-dark rounded"
          style={{ width: "500px", height: "650px" }}
        >
          <h1> Notified Me </h1> <br />
          <h6 className="p-3 mb-2 bg-success text-white rounded">
            {" "}
            Your Payment Success{" "}
          </h6>
          <br />
          <p className="m-2">
            Please Enter Your Email and Telephone Number for Send Conformation
          </p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group m-2">
              <label for="exampleInputEmail1">Email Address</label>
              <input
                type="email"
                className="form-control m-2"
                id="exampleInputEmail1"
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group m-2">
              <label for="exampleInputTeleNo">Telephone No</label>
              <input
                type="text"
                className="form-control m-2"
                id="exampleInputTeleNo"
                placeholder="Enter Tele No"
                name="teleNo"
                value={this.state.teleNo}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group m-2">
              <button className="btn btn-dark" type="submit">Send</button>
              </div>
          </form>

          <br/>
          <a className="btn btn-dark" href={"/taxi"}>
            <i></i>&nbsp;Reserve a Taxi
          </a>

            <br/><br/>
          <a className="btn btn-outline-dark" href={"/view/customer/hotels"}>
            <i></i>&nbsp;Back to Home Page
          </a>
        </div>
      </div>
    );
  }
}
