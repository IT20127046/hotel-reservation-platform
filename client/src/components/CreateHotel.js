import React, { Component } from "react";
import axios from "axios";


export default class CreateHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hotelID: "",
        hotelName: "",
        district: "",
        city: "",
        address: "",
        teleNo: "",
        description: "",
        email: "",
        password: ""
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

  
    const { hotelID, hotelName, district, city, address, teleNo, description, email, password } = this.state;

    const data = {
      email: email,
      password: password,
      hotelID: hotelID,
      hotelName: hotelName,
      district: district,
      city: city,
      address: address,
      teleNo: teleNo,
      description: description
    };
    


    console.log(data);

    axios.post("http://localhost:5000/hotel/add", data).then((res) => {
      if (res.data.success) { 
        alert("Hotel Created Successfully");

        //  this.props.history.push({
        //   pathname: "/",
        //   state: this.roomno,
          
        // });
        
        
        this.setState({
            hotelID: "",
            hotelName: "",
            district: "",
            city: "",
            address: "",
            teleNo: "",
            description: "",
            email: "",
            password: ""
        });
      }
    });
  };

  render() {
    return (
      <div>
     <div className="container border border-dark  mt-5 col-md-6">
          <div className="form-group row">
            <div className="col-lg-12 margin-tb">
              <div>
                &nbsp;
                <h2 className="text-center">Add Hotel Details</h2>
                &nbsp;
              </div>
            </div>
          </div>

          <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Hotel Admin Email :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
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
                  <strong>Hotel Admin Password :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
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
                  <strong>Hotel ID :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Hotel ID - Hxx"
                    name="hotelID"
                    pattern="H[0-9]{2}"
                    title="Room No is Invalid"
                    value={this.state.hotelID}
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
                  <strong>Hotel Name :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="hotelName"
                    value={this.state.hotelName}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>District :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter District"
                    name="district"
                    value={this.state.district}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>City :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter City"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Address :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Telephone No :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Tele No"
                    name="teleNo"
                    value={this.state.teleNo}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>About :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter About"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;
            <div className="col-md-12">
              <div className="form-group">
              <button className="btn btn-outline-success" type="submit">
                  <i className="fa fa-save"> Save </i>
                </button>
              </div>
            </div>
            &nbsp;
          </form>
          <a className="btn btn-outline-danger" href={'/view/admin/hotels'}>
            <i className="fa fa-edit"></i>&nbsp;Back
          </a>
        </div>
      </div>
    );
  }
}
