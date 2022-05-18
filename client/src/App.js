import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import CreateRoomDetails from "./components/CreateRoomDetails";
import ViewRoomDetails from './components/ViewRoomDetails';
import EditRoomDetails from './components/EditRoomDetails';
import ReserveRoom from './components/ReserveRoom';
import CreateHotel from './components/CreateHotel';
import EditHotelDetails from './components/EditHotelDetails';
import ViewHotelDetails_Customer from './components/ViewHotelDetails_Customer';
import ViewHotelDetails_Admin from './components/ViewHotelDetails_Admin';
import ViewHotelDetails_HAdmin from './components/ViewHotelDetails_HAdmin';
import TestSMSService from './components/TestSMSService';
import TaxiService from './components/TaxiService';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
          
            <Route path="/rooms" exact component={ViewRoomDetails}></Route>
            <Route path="/room/add" component={CreateRoomDetails}></Route>
            <Route path="/edit/:id" component={EditRoomDetails}></Route>
            <Route path="/room/reserve" component={ReserveRoom}></Route>

            <Route path="/view/admin/hotels" exact component={ViewHotelDetails_Admin}></Route>
            <Route path="/view/hadmin/hotels" exact component={ViewHotelDetails_HAdmin}></Route>
            <Route path="/add/hotel" exact component={CreateHotel}></Route>
            <Route path="/hotel/edit/:id" exact component={EditHotelDetails}></Route>
            <Route path="/view/customer/hotels" exact component={ViewHotelDetails_Customer}></Route>
            <Route path="/msg/send" exact component={TestSMSService}></Route>
            <Route path="/taxi" exact component={TaxiService}></Route>
          </div>
      </BrowserRouter>
      
    )
  }
}
