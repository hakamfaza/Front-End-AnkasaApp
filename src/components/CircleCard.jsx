/* eslint-disable import/no-unresolved */
import React from 'react';
import tokyo from '../assets/images/home_bg.jpg';
import '../assets/styles/circleCard.css';

export default function CircleCard() {
  return (
    <div className="circleCard">
      <div className="outline">
        <img src={tokyo} alt="" className="img" />
      </div>
      <h4 className="titleDestination">Tokyo</h4>
    </div>
  );
}
