/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { } from 'react';
import { } from 'react-redux';
// import '../assets/styles/landing.css'
import bgHome from '../assets/images/home_bg.jpg';
import object from '../assets/images/object.svg';
import iTransfer from '../assets/icons/transfer.svg';
import logo from '../assets/images/logo.svg';
import btnBack from '../assets/icons/btnBack.svg';

export default function Test() {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state);

  // useEffect(() => {
  //   // dispatch(getUser());
  // }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <div className="titleBox">
            <div className="boxOfTitle">
              <h1 className="homeTitle">Find your</h1>
              <h1 className="flightTitle">Flight</h1>
            </div>
            <p className="homeText">and explore the world with us</p>
          </div>
          <img src={bgHome} className="bgImg" alt="Tokyo" />
        </div>
        <div className="col-sm-4">
          <div className="boxOfMediumImg">
            <img src={bgHome} className="bgMediumImg" alt="Tokyo" />
            <img src={object} alt="object" className="object" />
          </div>
        </div>
      </div>
      <div className="boxOfCard">
        <div>
          <h5 className="mediumText">Hey,</h5>
          <h4 className="largeText smMarginTop">Where you want to go?</h4>
          <div className="recently mMarginTop">
            <h5 className="textRecently">Recently Searched</h5>
            <img src={btnBack} alt="" className="btnNext" />
          </div>
          <div className="boxOfDestionation">
            <p className="textFrom">From</p>
            <div className="row minMarginTop">
              <div className="col-sm-4">
                <h4 className="titleDestionation">Medan</h4>
                <p className="textDestionation">Indonesia</p>
              </div>
              <div className="col-sm-4 boxOfIcon">
                <img
                  src={iTransfer}
                  alt="transfer"
                  className="transfer"
                />
              </div>
              <div className="col-sm-4 boxFinalExam">
                <h4 className="titleDestionation">Tokyo</h4>
                <p className="textDestionation">Japan</p>
              </div>
            </div>
          </div>

          <button className="btnSend">
            <img src={logo} alt="" />
            One way
          </button>
          <h5 className="actionTitle">Departure</h5>
          <input type="date" className="date" value="Monday, 20 July 2020" />
          <h5 className="actionTitle">How many person?</h5>
          <div className="boxOfAdult">
            <input type="text" className="person" />
            <input type="text" className="person" />
          </div>
          <h5 className="actionTitle">Which class do you want?</h5>
          <div className="boxOfRadio">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="economy"
                id="economy"
              />
              <label className="form-check-label" htmlFor="economy"> Economy </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Bussiness
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                First class
              </label>
            </div>
          </div>
          <div>
            <button className="btnSearch">
              SEARCH FLIGHT
              <img src="./img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
