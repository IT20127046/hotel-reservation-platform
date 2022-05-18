import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import CreateRoomDetails from "./components/CreateRoomDetails";
import ViewRoomDetails from './components/ViewRoomDetails';
import EditRoomDetails from './components/EditRoomDetails';
import ReserveRoom from './components/ReserveRoom';
import CreateHotel from './components/CreateHotel';
import ViewHotelDetails_HAdmin from './components/ViewHotelDetails_HAdmin';
import EditHotelDetails from './components/EditHotelDetails';
import addReservedRoom from './components/addReservedRoom';
import viewReservedRoom from './components/viewReservedRoom';
import addReservedRoomTest from './components/addReservedRoomTest';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
          
            <Route path="/" exact component={ViewRoomDetails}></Route>
            <Route path="/room/add" component={CreateRoomDetails}></Route>
            <Route path="/edit/:id" component={EditRoomDetails}></Route>
            <Route path="/room/reserve" component={ReserveRoom}></Route>

            <Route path="/addreserved/:id" component={addReservedRoom}></Route>
            <Route path="/viewreservedrooms" component={viewReservedRoom}></Route>
            <Route path="/addreservedtest/:id" component={addReservedRoomTest}></Route>


            <Route path="/view/hotels" exact component={ViewHotelDetails_HAdmin}></Route>
            <Route path="/add/hotel" exact component={CreateHotel}></Route>
            <Route path="/hotel/edit/:id" exact component={EditHotelDetails}></Route>
          </div>
      </BrowserRouter>
      
    )
  }
}
