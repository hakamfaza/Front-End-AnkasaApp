/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../assets/styles/cardComponents.css';
import previous from '../assets/icons/previous.svg';

export default function Card(params) {
  return (
    <div className="Card">
      <img src={params.src} alt="Tokyo" className="cardImage" />
      <div className="objectGradient">
        <p className="textDestination">
          {params.destination}
          ,
        </p>
        <h5 className="titleCountry">{params.country}</h5>
        <div className="textAirlines">
          <div className="boxAirlines">
            <h6>
              {params.totalAirlines}
            </h6>
            <p>
              {' '}
              Airlines
            </p>
          </div>
        </div>
        <div className="from">
          <p>
            From
            {' '}
            {params.price}
          </p>
          <div className="circle">
            <img src={previous} alt="" className="iPrevious" />
          </div>
        </div>
      </div>
    </div>
  );
}
