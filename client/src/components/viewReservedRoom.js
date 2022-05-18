import React, { Component } from "react";
import axios from "axios";
import logo from '../images/img.jpg';

export default class viewReservedRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
        roomreserveddetails: [],
    };
  }

  componentDidMount() {
    this.retrieveReservedRooms();
  }

  retrieveReservedRooms() {
    axios.get("http://localhost:5000/reservedrooms").then((res) => {
      if (res.data.success) {
        this.setState({
            roomreserveddetails: res.data.existingreservedroomdetails,
        });

        console.log(this.state.roomreserveddetails);
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
          <h2>Reserved Rooms</h2>
          &nbsp;
        </div>
        <table className="table ">
          <thead>
          <tr className = "">
              <th scope="col">No</th>
              <th scope="col">Photo</th>
              <th scope="col">Room No</th>
              <th scope="col">Floor</th>
              <th scope="col">Room Type</th>
              <th scope="col">Rent (Rs)</th>
              <th scope="col">Date</th>  
              <th scope="col">Status</th>
              <th scope="col">Action</th>             
         
            </tr>
          </thead>

          <tbody>
            {this.state.roomreserveddetails.map((roomreserveddetails, index) => (
              <tr>
                <th >{index + 1}</th>
                <img src={logo} width="250" height="150" />       
                <td >{roomreserveddetails.roomno}</td>
                <td>{roomreserveddetails.floor} </td>  
                <td>{roomreserveddetails.roomtype} </td> 
                <td>{roomreserveddetails.rent} </td>               
                <td>{roomreserveddetails.date} </td>
                <td>{roomreserveddetails.status} </td>

                <td className="text-center">                 
                  <a className="btn btn-outline-success" href={`/addreserved/${roomreserveddetails._id}`}>
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
