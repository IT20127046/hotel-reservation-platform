import React, { Component } from 'react';
import axios from 'axios';

export default class ViewHotelDetails_HAdmin extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          hotels: [],
          hAdminID: "H01"
        };
      }
    
      componentDidMount() {
        this.retrieveHotels();
      }
    
      retrieveHotels() {

        const hAdminid = this.state.hAdminID;

        console.log(hAdminid);

        axios.get(`http://localhost:5000/hotel/get/${hAdminid}`).then((res) => {
          if (res.data.success) {
            this.setState({
                hotels: res.data.hotelDetails,
            });
    
            console.log(this.state.hotels);
          }
        });
      }
    
      onDelete =(id)=>{
        axios.delete(`http://localhost:5000/hotel/delete/${id}`).then((res)=>{
    
          alert("Hotel Deleted sucessfull")
          this.retrieveHotels();
        })
      }

      
  render() {
    return (
        <div className="container"><br/><br/>

            <div className='container'>

                <h4 className='p-3 mb-2 bg-dark text-white'> My Hotel </h4><br/>

                <div className='row'>
                    <div className='col'>
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="520" height="360" ></img>
                    </div>
                    <div className='col p-3 mb-2 bg-light text-dark'>
                        <h2 className='m-2 p-2'> Hotel {this.state.hotels.hotelName} - {this.state.hotels.hotelID} </h2>
                        <div className='row'>
                            <div className='col m-2'>
                                <div className='border border-secondary m-2 p-2 rounded'>
                                    <h5> Address </h5>
                                    <p> {this.state.hotels.address} </p>
                                </div>
                                <div className='border border-secondary m-2 p-2 rounded'>
                                    <h5> Tele No </h5>
                                    <p> {this.state.hotels.teleNo} </p>
                                </div>
                            </div>
                            <div className='col m-2'>
                                <div className='border border-secondary m-2 p-2 rounded'>
                                    <h5> District and City </h5>
                                    <p> {this.state.hotels.district} - {this.state.hotels.city} </p>
                                </div>
                                <div className='border border-secondary m-2 p-2 rounded'>
                                    <h5> About </h5>
                                    <p> {this.state.hotels.description} </p>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-outline-success m-3 p-2" href={``}>
                            <i className="fa fa-edit"></i>&nbsp;Edit Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
