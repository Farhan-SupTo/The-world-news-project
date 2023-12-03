import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import newsPhoto1 from '../../../../assets/1.png';
import newsPhoto2 from '../../../../assets/2.png';
import newsPhoto3 from '../../../../assets/3.png';
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from 'moment';

const EditorsInsight = () => {

    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
       
          <Col>
            <Card>
              <Card.Img variant="top" src={newsPhoto1} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
               
              </Card.Body>
              <div className='ps-3 text-body-tertiary d-flex align-items-center'>
                <p><FaRegCalendarAlt></FaRegCalendarAlt></p>
                <p className='ps-2 mt-1 fw-semibold'><small>Jan 4, 2022</small></p>
            </div>
            </Card>
          
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={newsPhoto2} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
          
              </Card.Body>
              <div className='ps-3 text-body-tertiary d-flex align-items-center'>
                <p><FaRegCalendarAlt></FaRegCalendarAlt></p>
                <p className='ps-2 mt-1 fw-semibold'><small>Jan 10, 2022</small></p>
            </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={newsPhoto3} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              
              </Card.Body>
              <div className='ps-3 text-body-tertiary d-flex align-items-center'>
                <p><FaRegCalendarAlt></FaRegCalendarAlt></p>
                <p className='ps-2 mt-1 fw-semibold'><small>Dec 4, 2023</small></p>
            </div>
            </Card>
          </Col>
      </Row>
    );
};

export default EditorsInsight;