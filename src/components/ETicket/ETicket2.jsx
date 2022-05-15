import React, { useEffect } from 'react';
import { Row, Col, Card, CardTitle } from 'reactstrap';
import style from '../../assets/styles/booking-detail';
import '../../assets/styles/booking-detail.css';

import vector from '../../assets/images/Vector1.svg';
import airlinesLogo from '../../assets/images/garuda-indonesia-logo-BD82882F07-seeklogo3.svg';
import barcode from '../../assets/images/Group923.svg';

const ETicket = () => {
    return (
      <div>
        <Card body style={style.card}>
          <Row>
            <Col xs="6">
              <CardTitle tag="h1" className='booking'>
                <b>Booking Pass</b>
              </CardTitle>
            </Col>
            <Col xs="6">
              <CardTitle tag="h1" className='booking text-end'>
                <span className="threedots" />
              </CardTitle>
            </Col>
          </Row>
          <Row>
            <Col xs="2" className="border">
              <Row className="py-2">
                <Col className="text-center">
                  <img src={airlinesLogo} alt='airline'
                    width='186' height='100'
                  />
                </Col>
              </Row>
              <Row className="py-2">
                <Col tag="h3" className="text-center" style={style.origin}>
                  <b>IDN</b>
                </Col>
              </Row>
              <Row className="py-2">
                <Col className="text-center" style={style.origin}>
                  <img src={vector} alt='vector' width='38' height='37'/>
                </Col>
              </Row>
              <Row className="py-2">
                <Col tag="h3" className="text-center" style={style.origin}>
                  <b>JPN</b>
                </Col>
              </Row>
            </Col>
            <Col xs="8" className="border text-center">
              <Row className="py-4">
                <Col
                  className="justify-content-center"
                >
                  <div className="py-3">
                    <Row className="text-start">
                      <Col className="form-data" xs="6">
                        Passenger
                      </Col>
                      <Col className="form-data" xs="6">
                        Class
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <Col className="ticket-data" xs="6">
                        Mike Kowalski
                      </Col>
                      <Col className="ticket-data" xs="6">
                        Economy
                      </Col>
                    </Row>
                  </div>
                  <div className="py-3">
                    <Row className="text-start">
                      <Col className="form-data" xs="6">
                        Departure
                      </Col>
                      <Col className="form-data" xs="6">
                        Time
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <Col className="ticket-data" xs="6">
                        20 July 2020
                      </Col>
                      <Col className="ticket-data" xs="6">
                        12:33
                      </Col>
                    </Row>
                  </div>
                  <div className="py-3">
                    <Row className="text-start">
                      <Col className="form-data" xs="6">
                        Code
                      </Col>
                      <Col className="form-data" xs="6">
                        Terminal
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <Col className="ticket-data" xs="6">
                        AB-221
                      </Col>
                      <Col className="ticket-data" xs="6">
                        A
                      </Col>
                    </Row>
                  </div>
                  <div className="py-3">
                    <Row className="text-start">
                      <Col className="form-data" xs="6">
                        Gate
                      </Col>
                      <Col className="form-data" xs="6">
                        Seat
                      </Col>
                    </Row>
                    <Row className="text-start">
                      <Col className="ticket-data" xs="6">
                        221
                      </Col>
                      <Col className="ticket-data" xs="6">
                        21 B
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs="2" className="border">
              <Row className="py-5">
                <Col
                  className="text-center"
                  md="2"
                  style={style.barcode1}
                >
                  <img src={barcode} alt='barcode'/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    );
};

export default ETicket;