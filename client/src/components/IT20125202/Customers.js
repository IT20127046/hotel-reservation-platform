import React, { Component } from 'react'
import NavBarAdmin from './NavBarAdmin'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default class Customers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    document.title = "Customers"
    this.retrieveUsers();
  }

  retrieveUsers() {
    axios.get('http://localhost:5000/customers').then(res => {
      if (res.data.success) {
        this.setState({
          users: res.data.existingUsers
        });

        // console.log(this.state.users);
      }
    });
  }

  onDelete = (id) => {
    //with a confirmation msg
    confirmAlert({
      title: 'Delete User',
      message: 'Are you sure you want to delete the user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>
            axios.delete(`http://localhost:5000/user/delete/${id}`).then((res) => {
              alert("Deleted Successfully!");
              this.retrieveUsers();
            })
        },
        {
          label: 'No',
          onClick: () => alert('Cancelled. The user is not deleted')
        }
      ]
    });

  }

  handleSearchArea = (e) => {

    const searchKey = e.currentTarget.value;

    axios.get('http://localhost:5000/users').then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingUsers, searchKey);
      }
    });

  }

  filterData(users, searchKey) {
    const searchResult = users.filter((user) =>
      user.idNumber.toLowerCase().includes(searchKey) ||
      user.name.toLowerCase().includes(searchKey) ||
      user.type.toLowerCase().includes(searchKey) ||
      user.groupId.toLowerCase().includes(searchKey) ||

      user.idNumber.toUpperCase().includes(searchKey) ||
      user.name.toUpperCase().includes(searchKey) ||
      user.type.toUpperCase().includes(searchKey) ||
      user.groupId.toUpperCase().includes(searchKey) ||

      user.idNumber.includes(searchKey) ||
      user.name.includes(searchKey) ||
      user.type.includes(searchKey) ||
      user.groupId.includes(searchKey) 
    )

    this.setState({
      users: searchResult
    })
  }

  render() {
    return (
      <div>
        <NavBarAdmin />

        <div className="container">
          <div className='row'>
            <div className='col-lg-9 mt-2 mb-2'>
              <h1>Customers</h1>
            </div>
            <div className='col-lg-3 mt-2 mb-2'>
              <input
              className='form-control'
              type="search"
              placeholder = "Search User"
              name = "searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope='col'> # </th>
                <th scope='col'> First Name </th>
                <th scope='col'> Last Name </th>
                <th scope='col'> NIC </th>
                <th scope='col'> Email </th>
                <th scope='col'> Mobile </th>
                <th scope='col'> Country </th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((users, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{users.firstName}</td>
                  <td>{users.lastName}</td>
                  <td>{users.NIC}</td>
                  <td>{users.email}</td>
                  <td>{users.mobile}</td>
                  <td>{users.country}</td>
                  <td>
                    <a className='btn btn-outline-danger' href="#" onClick={() => this.onDelete(users._id)}>
                      <i className='fas fa-trash'></i> &nbsp;Delete
                    </a>
                  </td>
                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


