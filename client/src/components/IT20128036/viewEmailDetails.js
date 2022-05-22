import React, { Component } from "react";
import axios from "axios";


export default class viewemails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewemails: [],
    };
  }

  componentDidMount() {
    this.retrieveEmails();
  }

  retrieveEmails() {
    
    axios.get("http://localhost:5000/emails").then((res) => {
      if (res.data.success) {
        this.setState({
            viewemails: res.data.existingMails,
        });

        console.log(this.state.viewemails);
      }
    });
  }

 

  render() {
    return (
      <div className="container">
        <div className="float-left">
          &nbsp;
          <h2>Send Payment Confirmation Mail</h2>
          &nbsp;
        </div>
        <table className="table ">
          <thead>
            <tr className="">
              <th scope="col">No</th>
              <th scope="col">Email</th>

              <th scope="col">Subject</th>

              <th scope="col">Message</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>

          <tbody>
            {this.state.viewemails.map(
              (viewemails, index) => (
                <tr>
                  <th>{index + 1}</th>
                

                  <td>{viewemails.email}</td>

                  <td>{viewemails.subject} </td>
                  <td>{viewemails.message} </td>
                  <td>  <a className="btn btn-outline-info" href={`/mail/send/${viewemails._id}`}>
                    <i className="fa fa-check"></i>&nbsp;Send Mail
                  </a> </td>
                </tr>
              )
            )}
          </tbody>
          <a className="btn btn-outline-dark" href="/rooms">
                    <i className="fa fa-link"></i>&nbsp;Back
                  </a>
        </table>
      </div>
    );
  }
}
