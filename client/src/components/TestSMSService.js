import React, { Component } from "react";
import axios from "axios";

export default class TestSMSService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello SMS Service",
    };
  }

  buttonClick = (e) => {

    e.preventDefault();

    const {msg} = this.state;

    const data = {
      sendmsg: msg
    };

    console.log(data);

    axios.post("http://localhost:5000/sms/send", data).then((res) => {
      if (res.data.success) {
        alert("Hotel Created Successfully");
      }
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button type="submit" onClick={this.buttonClick}>
          Click
        </button>

        <button>Reserve a Taxi</button>
      </div>
    );
  }
}
