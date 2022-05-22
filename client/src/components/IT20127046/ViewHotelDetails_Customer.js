import React, { Component } from "react";
import axios from "axios";

export default class ViewHotelDetails_Customer extends Component {
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

  render() {
    return (
      <div className="container">
        <div className="float-left">
          &nbsp;
          <h2 className="p-3 mb-2 bg-dark text-white">Welecome to Hotel Reservertion </h2>
          &nbsp;
        </div>

        <div className="row">
          <div className="col-3 p-3 mb-2 bg-light text-dark">
            <h6>Serach Hotel</h6>
            <input
              type='text'
              className="form-control"
              placeholder="Search Hotel...."
            /><br/>
            <button className="btn btn-outline-primary">Search</button>
            <br/><br/>
            <h6>Filter Serach Hotel</h6>
            <select class="form-control">
              <option value="">Colombo</option>
              <option value="">Kandy</option>
              <option value="">Matara</option>
              <option value="">Puttalam</option>
              <option value="">Kegalle</option>
            </select><br/>
            <button className="btn btn-outline-primary">Search</button>
          </div>
          <div className="col-9">
            <h4 className="p-3 mb-2 bg-light text-dark">Explore Hotels</h4>
            {this.state.hotels.map((hotelData, index) => (
                <div className="container">
                    <div className="row border border-secondary rounded">
                        <div className="col">
                            <img className="m-2" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070" width="320" height="220"></img>
                        </div>
                        <div className="col">
                            <div className="container">
                                <div className="container">
                                    <h6>{hotelData.hotelName}</h6>
                                    <br />
                                    <p>{hotelData.description}</p>
                                    <p>
                                    {hotelData.city} - {hotelData.district}
                                    </p>
                                    <p>{hotelData.address}</p>
                                    <p>{hotelData.teleNo}</p>
                                </div>
                                <a className="m-2 btn btn-outline-success" href={`/room/reserve/${hotelData.hotelID}`}>
                                  View Rooms
                                </a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
