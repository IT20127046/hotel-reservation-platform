import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

class NavBarAdmin extends Component {

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push(`/sysAdminLogin`)
    window.location.reload();
  }

  render() {

    const loginRegLink = (
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a className="nav-link" aria-current="page" href="/sysAdminLogin" style={{textDecoration: 'none', color: 'white'}}>Login</a>
        </li>
      </ul>
    )

    let userLink = (
        <ul className='nav nav-tabs'>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/adminhome" style={{textDecoration: 'none', color: 'white'}}>Home</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/view/admin/hotels" style={{textDecoration: 'none', color: 'white'}}>Hotels</a>
          </li>
          <li className='nav-item'>
            <a className="nav-link" aria-current="page" href="/customers" style={{textDecoration: 'none', color: 'white'}}>Customers</a>
          </li>
          <li className='nav-item'>
            <a href='/sysAdminLogin' onClick={this.logOut.bind(this)} className="nav-link" style={{textDecoration: 'none', color: 'white'}}>
              Log out
            </a>
          </li>
        </ul>
      )


    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light" style={{background: 'black'}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{color: 'white'}}>Online Hotel Reservation Platform</a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">

              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {localStorage.token ? userLink : loginRegLink}

            </div>
          </div>
        </nav>
      </div>
    )
  }
}


export default withRouter(NavBarAdmin);