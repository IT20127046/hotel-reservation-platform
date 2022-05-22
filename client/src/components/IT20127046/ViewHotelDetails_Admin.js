import React, { Component } from "react";
import axios from "axios";
import NavBarAdmin from '../IT20125202/NavBarAdmin';

export default class ViewHotelDetails_Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    this.retrieveRooms();
  }

  retrieveRooms() {
    axios.get("http://localhost:5000/hotels").then((res) => {
      if (res.data.success) {
        this.setState({
            hotels: res.data.existingHotelDetails,
        });

        console.log(this.state.hotels);
      }
    });
  }

  onDelete =(id)=>{
    axios.delete(`http://localhost:5000/hotel/delete/${id}`).then((res)=>{

      alert("Hotel Deleted sucessfull")
      this.retrieveRooms();
    })
  }


  render() {
    return (
      <div>
        <NavBarAdmin />
        <div className="container">
        
        <div className="float-left">
          &nbsp;
          <h2>Hotels</h2>
          &nbsp;
        </div>
        <a className="btn btn-outline-success" href={'/add/hotel'}>
            <i className="fa fa-edit"></i>&nbsp;Add Hotel
        </a>
        <table className="table ">
          <thead>
          <tr className="b ">
              <th scope="col">No</th>
              <th scope="col">Hotel ID</th>
              <th scope="col">Name</th>
              <th scope="col">District</th>
              <th scope="col">City</th>
              <th scope="col">Address</th>
              <th scope="col">Tele No</th>
              <th scope="col">About</th>
              <th scope="col">Rooms</th>
            </tr>
          </thead>

          <tbody>
            {this.state.hotels.map((hotelData, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{hotelData.hotelID}</td>
                <td>{hotelData.hotelName} </td>  
                <td>{hotelData.district} </td> 
                <td>{hotelData.city} </td>               
                <td>{hotelData.address} </td>
                <td>{hotelData.teleNo} </td>
                <td>{hotelData.description} </td>

                <td>
                  <a className="btn btn-outline-success" href={`/rooms`}>
                    <i className="fa fa-edit"></i>&nbsp;View
                  </a>
                </td>

                <td className="text-center">                 
                  <a className="btn btn-outline-success" href={`/hotel/edit/${hotelData._id}`}>
                    <i className="fa fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-outline-danger" href="#" onClick={()=>this.onDelete(hotelData._id)}>
                    <i className="fa fa-trash"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}
