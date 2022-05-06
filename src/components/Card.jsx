/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../assets/styles/cardComponents.css';

export default function Card(params) {
  return (
    <div className="Card">
      <img src={params.src} alt="Tokyo" className="cardImage" />
      <div className="objectGradient">
        <div className="textAirlines">
          <p>{params.totalAirlines}</p>
        </div>
        <p className="textDestination">
          {params.destination}
          ,
        </p>
        <h5 className="titleCountry">{ params.country}</h5>
      </div>
    </div>
  );
}
