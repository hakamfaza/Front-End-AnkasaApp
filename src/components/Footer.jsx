import React from "react";
import "../assets/styles/ian.css";
import appStore from "../assets/images/app store.png";

const Footer = () => {
  return (
    <div class="ian container">
      <div class="jumbotron">
        <div class="form">
          <div class="form-title">
            <div class="icon"></div>
            <div class="text">Ankasa</div>
          </div>
          <h5>
            Find your Flight and explore the world with us. We will take care of
            the rest
          </h5>
        </div>
        <div class="form">
          <div class="form-title">
            <div class="text">Features</div>
          </div>
          <ul>
            <li>Find Ticket</li>
            <li>My Booking</li>
            <li>Chat</li>
            <li>Notification</li>
          </ul>
        </div>
        <div class="form">
          <div class="form-title">
            <div class="text">Download Angkasa app</div>
          </div>
          <div class="images">
            <img src={appStore} alt="App Store" />
            <img src="../assets/images/google play.png" alt="Google Play" />
          </div>
        </div>
        <div class="form">
          <div class="form-title">
            <div class="text">Follow Us</div>
          </div>
          <div class="form-icon">
            <img src="../assets/icons/vector-fb.svg" alt="Facebook" />
            <img src="../assets/icons/vector-tt.svg" alt="Twitter" />
            <img src="../assets/icons/vector-ig.svg" alt="Instagram" />
            <img src="../assets/icons/vector-yt.svg" alt="Youtube" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="form-location">
          <div class="icon"></div>
          <div class="text">Jakarta Indonesia</div>
        </div>
        <small>© Ankasa. All Rights Reserved.</small>
      </div>
    </div>
  );
};
export default Footer;
