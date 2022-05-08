import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/landing.css';
import { Link } from 'react-router-dom';
import { Zoom, Slide } from 'react-reveal';

import bgHome from '../assets/images/home_bg.jpg';
import object from '../assets/images/object.svg';
import iTransfer from '../assets/icons/transfer.svg';
import arrow from '../assets/icons/arrow.svg';
import logo from '../assets/images/logo.svg';
import btnBack from '../assets/icons/btnBack.svg';
import btnPrev from '../assets/icons/previous.svg';
import Card from '../components/Card';
import CircleCard from '../components/CircleCard';
import vector from '../assets/images/vector.svg';

import { getDestination } from '../redux/actions/destination';
import { getUser } from "../redux/actions/user";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Landing() {
  const dispatch = useDispatch();
  // const [getClass, setClass] = useState();
  const [getForm, setForm] = useState({
    startPlace: '',
    destination: '',
    child: '',
    adult: '',
  });
  const { destination } = useSelector((state) => state);


  useEffect(() => {
    dispatch(getDestination());
  }, [dispatch]);

  const onChange = (e, field) => {
    setForm({
      ...getForm,
      [field]: e.target.value,
    });
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="container-fluid landing">
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <div className="titleBox">
            <Slide left>
              <div className="boxOfTitle">
                <h1 className="homeTitle">Find your</h1>
                <h1 className="flightTitle">Flight</h1>
              </div>
              <p className="homeText">and explore the world with us</p>
            </Slide>
          </div>
          <img src={bgHome} className="bgImg" alt="Tokyo" />
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="boxOfMediumImg">
            <img src={bgHome} className="bgMediumImg" alt="Tokyo" />
            <Zoom bottom>
              <img src={object} alt="object" className="object" />
            </Zoom>
          </div>
        </div>
      </div>
      <Slide top>
        <div className="boxOfCard">
          <div>
            <h5 className="mediumText">Hey,</h5>
            <h4 className="largeText smMarginTop">Where you want to go?</h4>
            <div className="recently mMarginTop">
              <h5 className="textRecently">Recently Searched</h5>
              <img src={btnBack} alt="" className="btnNext" />
            </div>
            <div className="boxOfDestination">
              <p className="textFrom">From</p>
              <div className="row boxDetailDestination minMarginTop">
                <h4 className="titleDestionation">Medan</h4>
                {/* <p className="textDestionation">Indonesia</p> */}
                {/* <div className="boxOfIcon"> */}
                <img
                  src={iTransfer}
                  alt="transfer"
                  className="transfer"
                />
                {/* </div> */}
                <h4 className="titleDestionation">Tokyo</h4>
                {/* <p className="textDestionation">Japan</p> */}
              </div>
            </div>

            <button className="btnSend">
              <img src={logo} alt="logo" />
              One way
            </button>
            <h5 className="actionTitle">How many person?</h5>
            <div className="boxOfAdult">
              <input type="text" className="person" placeholder="Child" onChange={(e) => onchange(e, 'child')} />
              <input type="text" className="person" placeholder="Adult" onChange={(e) => onChange(e, 'adult')} />
            </div>
            <h5 className="actionTitle">Which class do you want?</h5>
            <div className="boxOfRadio">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="economy"
                />
                <label className="form-check-label textRadio" htmlFor="economy">
                  Economy
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="bussiness"
                />
                <label className="form-check-label textRadio" htmlFor="bussiness">
                  Bussiness
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="actionRadio"
                  id="firstClass"
                />
                <label className="form-check-label textRadio" htmlFor="firstClass">
                  First class
                </label>
              </div>
            </div>
            <div>
              <button className="btnSearch">
                SEARCH FLIGHT
                <img src={arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </Slide>
      <div className="containerItems">
        <p className="textTrendings">TRENDING</p>
        <div className="tableTrendings">
          <h4 className="titleTrendings">Trending destinations</h4>
          <Link to="/" className="viewLink">View All</Link>
        </div>
        <div className="trendingsBox">
          {
            destination.data.map((item, index) => (
              <div key={index}>
                <Card destination={item.place} country={item.country} src={`${process.env.REACT_APP_API_URL}/${item.image}`} />
              </div>
            ))
          }
        </div>
      </div>
      <div className="topContainer">
        <div className="boxTop">
          <img src={vector} alt="" className="vector" />
          <div className="row boxTopCard">
            <div className="col-sm-12 boxOfTop">
              <h5 className="titleOfTop">TOP 10</h5>
              <h3 className="textOfTop">Top 10 destinations</h3>
            </div>
            <div className="col-sm-12 containerCard">
              {
                destination.data.map((item, index) => (
                  <div key={index}>
                    <CircleCard src={`${process.env.REACT_APP_API_URL}/${item.image}`} title={item.place.toUpperCase()} />
                  </div>
                ))
              }
            </div>
            <div className="col-sm-12 containerBtn">
              <div className="boxOfBtn">
                <button className="btnPrevious">
                  <img src={btnPrev} alt="" />
                </button>
                <button className="btnNextBlue">
                  <img src={btnBack} alt="" className="btnImg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
