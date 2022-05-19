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
import CreateCustomer from './components/IT20125202/CreateCustomer';
import CustomerLogin from './components/IT20125202/CustomerLogin';
import SysAdminLogin from './components/IT20125202/SysAdminLogin';
import HotelAdminLogin from './components/IT20125202/HotelAdminLogin';
import CustomerHome from './components/IT20125202/CustomerHome';
import CustomerProfile from './components/IT20125202/CustomerProfile';
import LandingPage from './components/IT20125202/LandingPage';
import SysAdminHome from './components/IT20125202/SysAdminHome';
import Customers from './components/IT20125202/Customers';
import AboutUs from './components/IT20125202/AboutUs';
import UpdateCustomer from  './components/IT20125202/UpdateCustomer';

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
          
            <Route path="/customer/register" exact component={CreateCustomer}></Route>
            <Route path="/customer/login" exact component={CustomerLogin}></Route>
            <Route path="/sysAdminLogin" exact component={SysAdminLogin}></Route>
            <Route path="/hotelAdminLogin" exact component={HotelAdminLogin}></Route>
            <Route path="/customer/home" exact component={CustomerHome}></Route>
            <Route path="/customer/profile" exact component={CustomerProfile}></Route>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/adminhome" exact component={SysAdminHome}></Route>
            <Route path="/customers" exact component={Customers}></Route>
            <Route path="/aboutus" exact component={AboutUs}></Route>
            <Route path="/customer/update" exact component={UpdateCustomer}></Route>

          </div>
      </BrowserRouter>
      
    )
  }
}
