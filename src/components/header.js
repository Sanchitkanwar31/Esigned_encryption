import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <NavLink to={"/"}>
              <span>Esigned</span>
            </NavLink>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                  <NavLink to="/" className={"nav-link"}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to="/programming" className={"nav-link"}>Programming</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to="/cryptotools" className={"nav-link"}>Crypto Tools</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/downloads" className={"nav-link"}>Downloads</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink to="/contact" className={"nav-link"}>Help/Support</NavLink>
                  </li>
                </ul>
                <div className="user_option">
                  <a href="#">
                    <img src="images/user.png" alt="User" />
                  </a>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
