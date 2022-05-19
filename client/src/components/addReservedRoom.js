import React, { Component } from "react";
import axios from "axios";

export default class addReservedRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotelid: "",
      roomno: "",
      floor: "",
      roomtype: "",
      rent: "",
      date: "",
      type: "",
      roomid: "",
    };

    this.state = {
      roomreserveddetails: [],
      validatedate: false,
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

    const { hotelid, roomno, floor, roomtype, rent, date, type, roomid } =
      this.state;

    const data = {
      hotelid: hotelid,
      roomno: roomno,
      floor: floor,
      roomtype: roomtype,
      rent: rent,
      date: date,
      status: "Reseved",
      type: type,
      roomid: roomid,
    };
    console.log(data);

    axios.get("http://localhost:5000/reservedrooms").then(async (res) => {
      if (res.data.success) {
        this.setState({
          roomreserveddetails: res.data.existingreservedroomdetails,
        });

        this.state.roomreserveddetails.map((roomreserveddetails, index) => {
          if (roomreserveddetails.date === data.date) {
            this.setState({ validatedate: true });
            alert("Select Another Date");
            console.log("Check ");
            window.location = "/allbooked/view";
          }
        });

        if (this.state.validatedate === false) {
          console.log("successsssssssssss");

          axios
            .post("http://localhost:5000/reservedroom/save", data)
            .then((res) => {
              if (res.data.success) {
                window.location = "/reservedrooms/view";
                alert("Successfully Reserved a Room");
                this.setState({
                  hotelid: "",
                  roomno: "",
                  floor: "",
                  roomtype: "",
                  rent: "",
                  date: "",
                  type: "",
                  roomid: "",
                });
              }
            });
        }
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    axios.get(`http://localhost:5000/room/${id}`).then((res) => {
      if (res.data.success) {
        console.log(res.data.roomdetails.roomno);
        this.setState({
          roomid: res.data.roomdetails._id,
          hotelid: res.data.roomdetails.hotelid,
          roomno: res.data.roomdetails.roomno,
          floor: res.data.roomdetails.floor,
          roomtype: res.data.roomdetails.roomtype,
          rent: res.data.roomdetails.rent,
          date: res.data.roomdetails.date,
        });
        console.log(this.state);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>

          <div className="col-md-6">
            <div class="card w-100 mt-5 mb-5">
              <div class="card-body">
                <h1 class="card-title">Book Room</h1>

                <h1 className="h3 mb-3 font-weight-normal"></h1>
                <form className="needs-validation" noValidate>
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <input
                      type="hidden"
                      className="form-control"
                      name="roomid"
                      value={this.state.roomid}
                      disabled
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Hotel ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="hotelid"
                      value={this.state.hotelid}
                      disabled
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Room Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="roomno"
                      value={this.state.roomno}
                      disabled
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Floor</label>
                    <input
                      type="text"
                      className="form-control"
                      name="floor"
                      value={this.state.floor}
                      disabled
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Room Type</label>
                    <input
                      type="text"
                      className="form-control"
                      name="roomtype"
                      value={this.state.roomtype}
                      disabled
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Rent</label>
                    <input
                      type="text"
                      className="form-control"
                      name="rent"
                      value={this.state.rent}
                      disabled
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>Food</label>

                    <select
                      className="form-select"
                      name="type"
                      value={this.state.type}
                      onChange={this.handleInputChange}
                    >
                      <option type="not selected yet" selected>
                        Select Type
                      </option>
                      <option type="With Foods">With Foods</option>
                      <option type="Without Foods">Without Foods</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    style={{ margintop: "15px" }}
                    onClick={this.onSubmit}
                  >
                    <i className="far fa-check-square"></i>
                    &nbsp; Reserve a Room
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
