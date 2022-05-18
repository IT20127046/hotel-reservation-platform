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
          <h2>Hotels</h2>
          &nbsp;
        </div>

        <div className="row">
          <div className="col-3 p-3 mb-2 bg-light text-dark">Left Side</div>
          <div className="col-9">
            {this.state.hotels.map((hotelData, index) => (
                <div className="container">
                    <div className="row border border-secondary">
                        <div className="col">
                            <img></img>
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
