import React from 'react';
import ETicket from '../components/ETicket/ETicket';
import ETicket1 from '../components/ETicket/ETicket1';
import ETicket2 from '../components/ETicket/ETicket2';
import { Helmet } from "react-helmet";

const BookingDetail = () => {
    return (
      <div>
        <Helmet>
          <style>{"body { background-color: #2395FF; }"}</style>
        </Helmet>
        <ETicket2 />
      </div>
    );
};

export default BookingDetail;