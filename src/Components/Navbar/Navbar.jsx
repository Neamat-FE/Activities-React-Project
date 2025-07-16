import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import worldIcon from '../../assets/world-icon.svg'
import userIcon from '../../assets/user-icon.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container d-flex align-items-center">
        <a className="navbar-brand primary-color" href="/">
          <img src={logo} alt="" style={{ height: 40, width: 40 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Flight
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="booking-page.html">
                Hotel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ticket-page.html">
                Visa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="order-summary.html">
                E-Sim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active body-bg rounded-3" href="#">
                Activity
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center mt-2 mt-md-0">
            <span className="me-3 ">
              <a href="#" className="primary-color-text text-decoration-none">
                Sell
              </a>
            </span>
            <a href="#">
              <img
                src={worldIcon}
                className="me-3"
                alt=""
                style={{ height: 16, width: 16 }}
              />
            </a>
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle ticket-bg border-0 px-3 py-2 rounded-3"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img src={userIcon} alt="" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>


  )
}

export default Navbar