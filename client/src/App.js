import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreateRoomDetails from "./components/IT20131456/CreateRoomDetails";
import ViewRoomDetails from "./components/IT20131456/ViewRoomDetails";
import EditRoomDetails from "./components/IT20131456/EditRoomDetails";
import ReserveRoom from "./components/IT20131456/ReserveRoom";
import Payment from "./components/IT20131456/Payment";
import CreateHotel from "./components/CreateHotel";
import EditHotelDetails from "./components/EditHotelDetails";


import addReservedRoom from "./components/addReservedRoom";
import viewReservedRoom from "./components/viewReservedRoom";
import EditReservedRoomDetails from "./components/editReservedRoom";
import viewBookedDetails from "./components/viewBookedDetails";
import sendmail from "./components/sendEmail";
import viewallBookedDetails from "./components/viewAllBookedRoom";

import ViewHotelDetails_Customer from "./components/ViewHotelDetails_Customer";
import ViewHotelDetails_Admin from "./components/ViewHotelDetails_Admin";
import ViewHotelDetails_HAdmin from "./components/ViewHotelDetails_HAdmin";

import TestSMSService from "./components/TestSMSService";
import TaxiService from "./components/TaxiService";

import CreateCustomer from "./components/IT20125202/CreateCustomer";
import CustomerLogin from "./components/IT20125202/CustomerLogin";
import SysAdminLogin from "./components/IT20125202/SysAdminLogin";
import HotelAdminLogin from "./components/IT20125202/HotelAdminLogin";
import CustomerHome from "./components/IT20125202/CustomerHome";
import CustomerProfile from "./components/IT20125202/CustomerProfile";
import LandingPage from "./components/IT20125202/LandingPage";
import SysAdminHome from "./components/IT20125202/SysAdminHome";
import Customers from "./components/IT20125202/Customers";
import TaxiServiceAlert from "./components/TaxiServiceAlert";
import BookTaxi from "./components/BookTaxi";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/payment" component={Payment}></Route>
          <Route path="/rooms" component={ViewRoomDetails}></Route>
          <Route path="/room/add" component={CreateRoomDetails}></Route>
          <Route path="/edit/:id" component={EditRoomDetails}></Route>
          <Route path="/room/reserve" component={ReserveRoom}></Route>

          <Route
            path="/reservedrooms/add/:id"
            component={addReservedRoom}
          ></Route>
          <Route
            path="/reservedrooms/view"
            component={viewReservedRoom}
          ></Route>

          <Route
            path="/reservedrooms/edit/:id"
            component={EditReservedRoomDetails}
          ></Route>
          <Route path="/booked/view/:id" component={viewBookedDetails}></Route>
          <Route path="/mail/send" component={sendmail}></Route>
          <Route
            path="/allbooked/view"
            component={viewallBookedDetails}
          ></Route>

          <Route
            path="/view/hotels"
            exact
            component={ViewHotelDetails_HAdmin}
          ></Route>

          <Route
            path="/view/admin/hotels"
            exact
            component={ViewHotelDetails_Admin}
          ></Route>
          <Route
            path="/view/hadmin/hotels"
            exact
            component={ViewHotelDetails_HAdmin}
          ></Route>

          <Route path="/add/hotel" exact component={CreateHotel}></Route>
          <Route
            path="/hotel/edit/:id"
            exact
            component={EditHotelDetails}
          ></Route>
          <Route
            path="/view/customer/hotels"
            exact
            component={ViewHotelDetails_Customer}
          ></Route>

          <Route path="/msg/send" exact component={TestSMSService}></Route>
          <Route path="/taxi" exact component={TaxiService}></Route>
          <Route path="/taxi/alert" exact component={TaxiServiceAlert}></Route>
          <Route path="/taxi/book" exact component={BookTaxi}></Route>

          <Route
            path="/customer/register"
            exact
            component={CreateCustomer}
          ></Route>
          <Route path="/customer/login" exact component={CustomerLogin}></Route>
          <Route path="/sysAdminLogin" exact component={SysAdminLogin}></Route>
          <Route
            path="/hotelAdminLogin"
            exact
            component={HotelAdminLogin}
          ></Route>
          <Route path="/customer/home" exact component={CustomerHome}></Route>
          <Route
            path="/customer/profile"
            exact
            component={CustomerProfile}
          ></Route>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/adminhome" exact component={SysAdminHome}></Route>
          <Route path="/customers" exact component={Customers}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
