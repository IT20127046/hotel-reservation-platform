import React, { Component } from "react";
import axios from "axios";
import logo from "../../images/img.jpg";


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
          <h2>Book Your Hotel Room</h2>
          &nbsp;
        </div>
        <table className="table ">
          <thead>
          <tr className = "">
              <th scope="col">No</th>
              <th scope="col">Photo</th>             
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
                <img src={logo} width="250" height="150" />              
                <td>{roomdetails.hotelid} </td>
                <td >{roomdetails.roomno}</td>
                <td>{roomdetails.floor} </td>  
                <td>{roomdetails.roomtype} </td> 
                <td>{roomdetails.rent} </td> 
                               
              

                <td >          

                                  
                  <a className="btn btn-outline-info" href={`/booked/view/${roomdetails.roomno}`}>
                    <i className="fa fa-check"></i>&nbsp;Allotted Days
                  </a>
                  &nbsp;    
                  <a className="btn btn-outline-success" href={`/reservedrooms/add/${roomdetails._id}`}>

                    <i className="fa fa-bed"></i>&nbsp;Reserve
                  </a>
                  &nbsp;                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
