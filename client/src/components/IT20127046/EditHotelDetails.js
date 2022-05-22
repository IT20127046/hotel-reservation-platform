import React, { Component } from "react";
import axios from "axios";


export default class EditHotelDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hotelID: "",
        hotelName: "",
        district: "",
        city: "",
        address: "",
        teleNo: "",
        description: ""
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
    const id = this.props.match.params.id;

    const { hotelID, hotelName, district, city, address, teleNo, description } = this.state;

    const data = {
      hotelID: hotelID,
      hotelName: hotelName,
      district: district,
      city: city,
      address: address,
      teleNo: teleNo,
      description: description
    };

    console.log(data);

    axios.put(`http://localhost:5000/hotel/update/${id}`, data).then((res) => {
      if (res.data.success) { 
        alert("Hotel Details Updated Successfully");
                   
        this.setState({
            hotelID: "",
            hotelName: "",
            district: "",
            city: "",
            address: "",
            teleNo: "",
            description: ""
        });
      }
    });
  };


  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/hotel/get/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
            hotelID:res.data.hotelDetails.hotelID,
            hotelName:res.data.hotelDetails.hotelName,
            district:res.data.hotelDetails.district,
            city:res.data.hotelDetails.city,
            address:res.data.hotelDetails.address,
            teleNo:res.data.hotelDetails.teleNo,
            description:res.data.hotelDetails.description


        });

        console.log(this.state.roomdetails);
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
                <h2 className="text-center">Edit Hotel Details</h2>
                &nbsp;
              </div>
            </div>
          </div>

          <form onSubmit={this.onSubmit}>
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
                  <i className="fa fa-edit"> Save </i>
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
