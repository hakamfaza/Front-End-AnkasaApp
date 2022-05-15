import React from 'react';
// import ETicket from '../components/ETicket/ETicket';
// import ETicket1 from '../components/ETicket/ETicket1';
import ETicket2 from '../components/ETicket/ETicket2';
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingDetail = () => {
    return (
      <div>
        <Navbar />
        <Helmet>
          <style>{"body { background-color: #2395FF; }"}</style>
        </Helmet>
        <ETicket2 />
        <Footer />
      </div>
    );
};

export default BookingDetail;