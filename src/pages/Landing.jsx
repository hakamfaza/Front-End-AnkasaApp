import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../assets/styles/landing.css'
import bgHome from '../assets/images/home_bg.jpg';
import object from '../assets/images/object.svg';
import iTransfer from '../assets/icons/transfer.svg'
import logo from '../assets/images/logo.svg'
import btnBack from '../assets/icons/btnBack.svg'

export default function Landing() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    // dispatch(getUser());
  }, [dispatch]);

  return (
    <div class="container-fluid landing">
        <div class="row">
          <div class="col-sm-8">
            <div class="titleBox">
              <div class="boxOfTitle">
                <h1 class="homeTitle">Find your</h1>
                <h1 class="flightTitle">Flight</h1>
              </div>
              <p class="homeText">and explore the world with us</p>
            </div>
            <img src={bgHome} class="bgImg" alt="Tokyo" />
          </div>
          <div class="col-sm-4">
            <div class="boxOfMediumImg">
              <img src={bgHome} class="bgMediumImg" alt="Tokyo" />
              <img src={object} alt="object" class="object" />
            </div>
          </div>
        </div>
        <div class="boxOfCard">
          <div>
            <h5 class="mediumText">Hey,</h5>
            <h4 class="largeText smMarginTop">Where you want to go?</h4>
            <div class="recently mMarginTop">
              <h5 class="textRecently">Recently Searched</h5>
              <img src={btnBack} alt="" class="btnNext" />
            </div>
            <div class="boxOfDestionation">
              <p class="textFrom">From</p>
              <div class="row minMarginTop">
                <div class="col-sm-4">
                  <h4 class="titleDestionation">Medan</h4>
                  <p class="textDestionation">Indonesia</p>
                </div>
                <div class="col-sm-4 boxOfIcon">
                  <img
                    src={iTransfer}
                    alt="transfer"
                    class="transfer"
                  />
                </div>
                <div class="col-sm-4 boxFinalExam">
                  <h4 class="titleDestionation">Tokyo</h4>
                  <p class="textDestionation">Japan</p>
                </div>
              </div>
            </div>

            <button class="btnSend">
              <img src={logo} alt="" />
              One way
            </button>
            <h5 class="actionTitle">Departure</h5>
            <input type="date" class="date" />
            <h5 class="actionTitle">How many person?</h5>
            <div class="boxOfAdult">
              <input type="text" class="person" />
              <input type="text" class="person" />
            </div>
            <h5 class="actionTitle">Which class do you want?</h5>
            <div class="boxOfRadio">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="economy"
                  checked
                />
                <label class="form-check-label textRadio" for="economy">
                  Economy
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="bussiness"
                  checked
                />
                <label class="form-check-label textRadio" for="bussiness">
                  Bussiness
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="firstClass"
                />
                <label class="form-check-label textRadio" for="firstClass">
                  First class
                </label>
              </div>
            </div>
            <div>
              <button class="btnSearch">
                SEARCH FLIGHT
                <img src="./img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
