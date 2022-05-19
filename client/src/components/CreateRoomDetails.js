import React, { Component } from "react";
import axios from "axios";


export default class CreateRoomDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelid: "",
      roomno: "",
      floor: "",
      roomtype: "",
      rent: "",
    
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


    const {  hotelid, roomno, floor, roomtype, rent  } = this.state;

    const data = {
      hotelid: hotelid,
      roomno: roomno,
      floor: floor,
      roomtype: roomtype,
      rent: rent,  
    
    };
    


    console.log(data);

    axios.post("http://localhost:5000/room/save", data).then((res) => {
      if (res.data.success) { 
        alert("Hotel Room Created Successfully");
        window.location ="/rooms"      
                      
        this.setState({
          hotelid:"",
          roomno: "",
          floor: "",
          roomtype: "",
          rent: "",
        
        
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
                <h2 className="text-center">Add Hotel Room Details</h2>
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
                    placeholder="Enter Hotel ID -Hxx"
                    name="hotelid"
                    pattern="H[0-9]{2}"
                    title="Hotel ID is Invalid"
                    value={this.state.hotelid}
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
                  <strong>Room No :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Room No -Rxx"
                    name="roomno"
                    pattern="R[0-9]{2}"
                    title="Room No is Invalid"
                    value={this.state.roomno}
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
                  <strong>Floor :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Floor"
                    name="floor"
                    value={this.state.floor}
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
                  <strong>Room Type:</strong>
                  <select className="form-control" name ="roomtype" value={this.state.roomtype}  onChange={this.handleChange} >
                      <option value ="Not">Not Selected</option>
                      <option value ="Single Room">Single Room </option>
                      <option value ="Double Room"> Double Room </option>
                    </select>
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Rent (per day) :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Rent ($)"
                    name="rent"
                    value={this.state.rent}
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
                  <i className="fa fa-save"> Save </i>
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
