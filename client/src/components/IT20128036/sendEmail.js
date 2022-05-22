import React, { Component } from "react";
import axios from "axios";


export default class sendmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: "",
     
     
    }; 
 
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

 
  

  onSubmit = (e) => {
    e.preventDefault();


    const {  email, subject, message } = this.state;

    const data = {
      email: email,
      subject: subject,
      message: message,
      
    };
    


    console.log(data);

    axios.post("http://localhost:5000/api/email", data).then((res) => {
      if (res.data.success) { 
        alert("Email Sent Successfully");

         window.location ="/emails/view"
       
        
        
        this.setState({
          email:"",
          subject: "",
          message: "",
        
        
        });
      }
    });
  };







  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    axios.get(`http://localhost:5000/email/${id}`).then((res) => {
      if (res.data.success) {
        console.log(res.data.mailsdata.email);
        this.setState({
          email: res.data.mailsdata.email,
          subject: res.data.mailsdata.subject,
          message: res.data.mailsdata.message,
       
        });
        console.log(this.state);
      }
    });
  }
  





  render() {
    return (
      <div>
     <div className="container border border-dark  mt-5 col-md-6">
          <div className="form-group row">
            <div className="col-lg-12 margin-tb">
              <div>
                &nbsp;
                <h2 className="text-center">Send Email</h2>
                &nbsp;
              </div>
            </div>
          </div>

          <form onSubmit={this.onSubmit}>
          <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Email :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email -example@mail.com"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Email ID is Invalid"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Subject :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Subject"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Message :</strong>
                  <textarea
                    className="form-control"
                    placeholder="Enter Message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            
              <div className="col-md-12">
              <div className="form-group">
              <button className="btn btn-outline-success" type="submit">
                  <i className="fa fa-envelope"> Send </i>
                </button>
              </div>
            </div>
            &nbsp;
          </form>
        </div>
      </div>
    );
  }
}
