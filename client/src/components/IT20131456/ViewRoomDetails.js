import React, { Component } from "react";
import axios from "axios";

export default class ViewRoomDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomdetails: [],
    };
  }

  componentDidMount() {
    this.retrieveRooms();
  }

  retrieveRooms() {
    axios.get("http://localhost:5000/rooms").then((res) => {
      if (res.data.success) {
        this.setState({
            roomdetails: res.data.existingroomdetails,
        });

        console.log(this.state.roomdetails);
      }
    });
  }

  onDelete =(id)=>{
    axios.delete(`http://localhost:5000/room/delete/${id}`).then((res)=>{

      alert("Room Deleted sucessfull")
      this.retrieveRooms();
    })
  }


  render() {
    return (
      <div className="container">
        <div className="float-left">
          &nbsp;
          <h2>Hotel Rooms</h2>
          &nbsp;
        </div>
        <table className="table ">
          <thead>
          <tr >
              <th scope="col">No</th>             
              <th scope="col">Hotel ID</th>
              <th scope="col">Room No</th>
              <th scope="col">Floor</th>
              <th scope="col">Room Type</th>
              <th scope="col">Rent ($)</th> 
             <th scope="col">Action</th>      
            </tr>
          </thead>

          <tbody>
            {this.state.roomdetails.map((roomdetails, index) => (
              <tr>
                <th >{index + 1}</th>              
                <td>{roomdetails.hotelid} </td>
                <td >{roomdetails.roomno}</td>
                <td>{roomdetails.floor} </td>  
                <td>{roomdetails.roomtype} </td> 
                <td>{roomdetails.rent} </td>                
                <td >                 
                  <a className="btn btn-outline-success" href={`/edit/${roomdetails._id}`}>
                    <i className="fa fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-outline-danger" href="#" onClick={()=>this.onDelete(roomdetails._id)}>
                    <i className="fa fa-trash"></i>&nbsp;Delete
                  </a>
                  &nbsp;
                  <a className="btn btn-outline-danger" href="/emails/view">
                    <i className="fa fa-credit-card"></i>&nbsp;Payment Confirm
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
