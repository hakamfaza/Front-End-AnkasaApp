import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/ian.css";

const Navbar = () => {
  return (
    <nav class="ian navbar navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/login">
          <div className="form-title">
            <div className="icon"></div>
            <div className="text">Ankasa</div>
          </div>
        </Link>
        <div className="form-search">
          <div className="icon"></div>
          <input
            type="text"
            className="input"
            placeholder="Where you want to go?"
          />
        </div>
        <div className="form-page">
        <Link class="navbar-brand" to="/login">
        <div className="text">Find Ticket</div>
        </Link>
        <Link class="navbar-brand" to="/login">
        <div className="text">My Booking</div>
        </Link>
        </div>
        <div className="form-user">
        <div className="icon-message"></div>
        <div className="icon-notification"></div>
        <div className="profile">user image</div>
      </div>
      </div>
    </nav>
  );
};
export default Navbar;
