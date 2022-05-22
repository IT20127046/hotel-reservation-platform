import React, { Component } from "react";
import axios from "axios";
import logo from '../../images/img.jpg';

export default class viewallBookedDetails extends Component {
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
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5000/reservedrooms`).then((res) => {
      if (res.data.success) {
        this.setState({
            roomreserveddetails: res.data.existingreservedroomdetails,
        });

        console.log(this.state.roomreserveddetails);
      }
    });
  }

  onDelete =(id)=>{
    axios.delete(`http://localhost:5000/reservedroom/delete/${id}`).then((res)=>{

      alert("Room Deleted sucessfull")
      this.retrieveReservedRooms();
    })
  }


  render() {
    return (
      <div className="container">
        <div className="float-left">
          &nbsp;
          <h2>Allotted Days</h2>
          &nbsp;
        </div>
        <table className="table ">
          <thead>
          <tr className = "">
              <th scope="col">No</th>
              <th scope="col">Photo</th>
             

              <th scope="col">Room No</th>
              
           
         
              <th scope="col">Date</th>  
              <th scope="col">Status</th>
                          
         
            </tr>
          </thead>

          <tbody>
            {this.state.roomreserveddetails.map((roomreserveddetails, index) => (
              <tr>
                <th >{index + 1}</th>
                <img src={logo} width="250" height="150" />  
                    
                <td >{roomreserveddetails.roomno}</td>
                            
                <td>{roomreserveddetails.date} </td>
                <td>{roomreserveddetails.status} </td>

               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
