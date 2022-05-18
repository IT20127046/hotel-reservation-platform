import React, { Component } from "react";
import axios from 'axios';

export default class addReservedRoom extends Component{





  
  constructor(props){

    super(props);

    



    this.state={
      roomno:"",
      floor:"",
      roomtype:"",
      rent:"",
      date:"",
      
      
    }

    this.state = {
        roomreserveddetails: [],
        validatedate : false
    };


  }

  





handleInputChange=(e)=>{
  const{name,value}=e.target;

  this.setState({
    ...this.state,
    [name]:value
  })

}






// componentDidMount() {
//     this.retrieveReservedRooms();
//   }

//   retrieveReservedRooms() {
//     axios.get("http://localhost:5000/reservedrooms").then((res) => {
//       if (res.data.success) {
//         this.setState({
//             roomreserveddetails: res.data.existingreservedroomdetails,
//         });

//          console.log(this.state.roomreserveddetails);
//       }
//     });
//   }



  












onSubmit=(e)=>{
  e.preventDefault();
  
  const{roomno,floor,roomtype,rent,date}=this.state;


  const data={
    roomno: roomno,
    floor: floor,
    roomtype: roomtype,
    rent: rent,
    date:date,
    status:"Reseved",
    
    
  }
  console.log(data);


  //this.saveData =()=>{

   




 // }



   









  
axios.get("http://localhost:5000/reservedrooms").then(async(res) => {
  if (res.data.success) {
    this.setState({
        
      
        roomreserveddetails : res.data.existingreservedroomdetails,
    });

    this.state.roomreserveddetails.map((roomreserveddetails, index)=>{
       if(roomreserveddetails.date == data.date){
           this.setState({validatedate:true})
          alert("Select Another Date")
           console.log("Check ");
           
           

       }










    })



 

  
    if(this.state.validatedate == false){
      console.log("successsssssssssss");
      //this.saveData();
      // return this.state.floor
  
      //console.log(this.state.roomno);
  await axios.post("http://localhost:5000/reservedroom/save",data).then((res)=>{
  if(res.data.success){
  alert("Successfully Reserved a Room")
  this.setState({
  roomno:"",
  floor:"",
  roomtype:"",
  rent:"",
  date:"",
  
  
  })  
  
  }
  })
  
  
   
      
  
  
  }
  
  



    











    
  }
}).then(()=>{






});








 

 








   







  
}


// saveData(){
//     axios.post("http://localhost:5000/reservedroom/save",data).then((res)=>{
//         if(res.data.success){
//           alert("Successfully Reserved a Room")
//           window.location="/viewreservedrooms"
//           this.setState({
//             roomno:"",
//             floor:"",
//             roomtype:"",
//             rent:"",
//             date:"",
//             status:"",
    
//           })  
          
//         }
//       })

// }





  componentDidMount(){
    
       const id = this.props.match.params.id ;
       console.log(id);
   
     
       axios.get(`http://localhost:5000/room/${id}`).then((res) =>{
         if(res.data.success){
             console.log(res.data.roomdetails.roomno);
           this.setState({
            roomno:res.data.roomdetails.roomno,
            floor:res.data.roomdetails.floor,
            roomtype:res.data.roomdetails.roomtype,
            rent:res.data.roomdetails.rent,
            date:res.data.roomdetails.date,
            

           });
           console.log(this.state);
         }
       });
      
    
     
   }








  render(){
    return(
   

    <div className="container">
        <h1>Reserve a room</h1>




        <form>
          <table>
            <tr>
              <td>
                <label>Room Number :</label>
              </td>
              <td>
                <input
                  type="text"
                  name="roomno"
                  value={this.state.roomno}
                  disabled
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Floor :</label>
              </td>
              <td>
                <input 
                  type="text"
                  name="floor"
                  value={this.state.floor}
                  disabled
                />
              </td>
            </tr>



            <tr>
              <td>
                <label>Room Type :</label>
              </td>
              <td>
                <input
                  type="text"
                  name="roomtype"
                  value={this.state.roomtype}
                  disabled
                />
                
              </td>
            </tr>







            <tr>
              <td>
                <label for="quantity">Rent :</label>
              </td>
              <td>
                <input
                  type="number"
                  name="rent"
                  value={this.state.rent}
                  onChange={this.handleInputChange}
                  disabled
                />
                
              </td>
            </tr>



            <tr>
              <td>
                <label>Date :</label>
              </td>
              <td>
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                
                />
                
              </td>
            </tr>


           
           

          

          

            
          </table>

          <button type="submit" className="btn btn-outline-success" onClick={this.onSubmit}>
            Reserved
          </button>
        </form>




    </div>
   
    )
  }



}