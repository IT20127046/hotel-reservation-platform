import React, { Component } from "react";
import axios from "axios";

export default class CreateStudentGroup extends Component {
  render() {
    return (
      <div>
        <div className="container border border-primary bg-light mt-5 col-md-6">
          <div className="form-group row">
            <div className="col-lg-12 margin-tb">
              <div>
                &nbsp;
                <h2 className="text-center">Add Hotel Room Details</h2>
                &nbsp;
              </div>
            </div>
          </div>

          <form>

            <div className="row ">
              <div className="col-md-12">
                <div className="form-group">
                  <strong>Room No :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Room No -Rxx"
                    name=""
                    pattern="R[0-9]{3}"
                    title="Room No is Invalid"
                    required
                  />
                </div>
              </div>
            </div> 
            &nbsp;

            <div className="row ">
            <div className="col-md-12">
                <div className="form-group">
                  <strong>Floor :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Floor"
                    name=""
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;

            <div className="row ">
            <div className="col-md-12">
                    <div class="form-group">
                    <strong>Room Type :</strong>
                    <select class="form-control" id="exampleFormControlSelect1" name ="" readonly>
                      <option value ="">Single Room</option>
                      <option value ="">Double Room</option>                    
                    </select>
                 </div>
                </div>
            </div>
            &nbsp;

            <div className="row "> 
            <div className="col-md-12">
                <div className="form-group">
                  <strong>Rent (per day) :</strong>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Rent (Rs)"
                    name=""
                    required
                  />
                </div>
              </div>
            </div>
            &nbsp;

            <div className="row ">
            <div className="col-md-12">
                    <div class="form-group">
                    <strong>Status :</strong>
                    <select class="form-control" id="exampleFormControlSelect1" name ="" readonly>
                      <option value ="">Reserved</option>
                      <option value ="">Not Reserved</option>                    
                    </select>
                 </div>
                </div>
            </div>
            &nbsp;

            <div className="col-md-12">
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  <i className="fa fa-save"> Save </i>
                </button>
              </div>
            </div>
            &nbsp;
          </form>
        </div>
      </div>
    );
  }
}
