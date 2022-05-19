import React, { Component } from 'react';
import axios from 'axios';

export default class TaxiService extends Component {

    constructor(props) {
        super(props);

        this.state = {
          successAlert: "",
          taxiService: "Uber",
          travelFrom: "Kandy",
          travelTo: "Colombo",
          vechileType: "Car",
          name: "Saman",
          teleNo: "0714542428"
        };
      }

      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        });
      };

      onSubmit = (e) => {
        e.preventDefault();

        const { taxiService, travelFrom, travelTo, vechileType, name, teleNo } = this.state;

        const data = {
            taxiService: taxiService,
            travelFrom: travelFrom,
            travelTo: travelTo,
            vechileType: vechileType,
            name: name,
            teleNo: teleNo
        };
    
        console.log(data);

        axios.post("http://localhost:5000/taxi/get", data).then((res) => {
            if (res.data.success) { 
                alert(res.data.success);
                console.log(res.data.success);

             
              window.location = `/taxi/alert/${this.state.teleNo}`;
        
            }
        });
      }

      
    

  render() {
    return (
      <div className='container'><br/><br/>

          <div className='container p-3 mb-2 bg-light text-dark rounded' style={{width: "500px", height:"650px"}}>

              <h1> Choose a Ride </h1> <br/>
              <h6> Select Taxi Service </h6>

              <form onSubmit={this.onSubmit}>
                <div className='row'>
                    <div className='col p-3 mb-2 bg-dark text-white m-2'>
                        <input type="radio" id="uber" name="taxiService" value="Uber" className="form-check-input"/>
                        <i className="fab fa-uber fa-2xl m-2"></i>Uber
                    </div>
                    <div className='col p-3 mb-2 bg-dark text-white m-2'>
                        <input type="radio" id="pickme" name="taxiService" value="PickMe" className="form-check-input"/>
                        <i className="fa-solid fa-taxi fa-2xl m-2"></i>PickMe
                    </div>
                </div>
                    <br/>
                <h6> Select From You </h6>

                <input
                    type='text'
                    className="form-control p-3 mb-2 bg-secondary text-white"
                    placeholder='From'
                    value={this.state.travelFrom}
                    onChange={this.handleInputChange}
                />
                <i className="fa fa-arrows-v d-flex justify-content-center m-2" aria-hidden="true"></i>
                <input
                    type='text'
                    className="form-control p-3 mb-2 bg-secondary text-white"
                    placeholder='To'
                    value={this.state.travelTo}
                    onChange={this.handleInputChange}
                />

                <br/>
                <h6> Select Vechile </h6>
                <div className='row'>
                    <div className='col m-2'>
                        <input type="radio" id="mCar" name="taxiMode" value="Mini Car" className="form-check-input"/>
                        <i className="fa fa-car fa-xl m-2"></i>Mini Car
                    </div>
                    <div className='col m-2'>
                        <input type="radio" id="car" name="taxiMode" value="Car" className="form-check-input"/>
                        <i className="fa fa-car fa-2xl m-2"></i>Car
                    </div>
                    <div className='col m-2'>
                        <input type="radio" id="van" name="taxiMode" value="Van" className="form-check-input"/>
                        <i className="fa fa-bus fa-2xl m-2"></i>Van
                    </div>
                </div>

                <br/>
                <h6>Your</h6>
                <div className='row'>
                    <div className='col'>
                        <input
                            type='text'
                            className="form-control"
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className='col'>
                        <input
                            type='text'
                            className="form-control"
                            placeholder='Tele No'
                            value={this.state.teleNo}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                    <br/>

                    <div className='row'>
                        <div className='col'>
                            <button className='btn btn-dark' type="submit">Check</button>
                        </div>
                        <div className='col'>
                            <p style={{fontSize:"15px", color:"green"}}>{this.state.successAlert}</p>
                        </div>
                    </div>
              </form>
          </div>
      </div>
    )
  }
}
