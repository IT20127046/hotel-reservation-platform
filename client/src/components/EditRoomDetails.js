import React, { Component } from "react";
import axios from "axios";


export default class EditRoomDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomno: "",
      floor: "",
      roomtype: "",
      rent: "",
      status: "",
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

    const { roomno, floor, roomtype, rent, status } = this.state;

    const data = {
      roomno: roomno,
      floor: floor,
      roomtype: roomtype,
      rent: rent,
      status: status,
    };
    


    console.log(data);

    axios.put(`http://localhost:5000/room/update/${id}`, data).then((res) => {
      if (res.data.success) { 
        alert("Hotel Room Updated Successfully");
                   
        this.setState({
          roomno: "",
          floor: "",
          roomtype: "",
          rent: "",
          status: "",
        });
      }
    });
  };


  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:5000/room/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
        roomno:res.data.roomdetails.roomno,
         floor:res.data.roomdetails.floor,
         roomtype:res.data.roomdetails.roomtype,
         rent:res.data.roomdetails.rent,
         status:res.data.roomdetails.status


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
                <h2 className="text-center">Edit Hotel Room Details</h2>
                &nbsp;
              </div>
            </div>
          </div>

          <form onSubmit={this.onSubmit}>
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
                    placeholder="Enter Rent (Rs)"
                    name="rent"
                    value={this.state.rent}
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
                  <strong>Status :</strong>
                  <select className="form-control" name ="status" value={this.state.status}  onChange={this.handleChange} >
                      <option value ="Not">Not Selected</option>
                      <option value ="Reserved">Reserved </option>
                      <option value ="Not Reserved"> Not Reserved </option>
                    </select>

                </div>
              </div>
            </div>
            &nbsp;
            <div className="col-md-12">
              <div className="form-group">
                <button className="btn btn-outline-success" type="submit">
                  <i className="fa fa-edit"> Update </i>
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
