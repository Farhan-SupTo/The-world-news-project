import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css'
import { Card, ListGroup } from "react-bootstrap";
import newsPhoto1 from '../../../assets/1.png'
import newsPhoto2 from '../../../assets/2.png';
import newsPhoto3 from '../../../assets/3.png';
import { FaRegCalendarAlt } from "react-icons/fa";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4>All categories</h4>
      <div >
        {categories.map((category) => (
          <p key={category.id}>
            <ListGroup><Link to={`/category/${category.id}`} className='text-dec ps-4 pt-3 text-decoration-none'>{category.name}</Link></ListGroup>
          </p>
        ))}
      </div>
      <Card className="mb-4">
              <Card.Img variant="top" src={newsPhoto1} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              
              </Card.Body>
              <div className='ps-3 text-body-tertiary d-flex align-items-center'>
                <p><FaRegCalendarAlt></FaRegCalendarAlt></p>
                <p className='ps-2 mt-1 fw-semibold'><small>Dec 4, 2023</small></p>
            </div>
            </Card>
      <Card className="mb-4">
              <Card.Img variant="top" src={newsPhoto2} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              
              </Card.Body>
              <div className='ps-3 text-body-tertiary d-flex align-items-center'>
                <p><FaRegCalendarAlt></FaRegCalendarAlt></p>
                <p className='ps-2 mt-1 fw-semibold'><small>Dec 4, 2023</small></p>
            </div>
            </Card>
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
    </div>
    
  );
};

export default LeftNav;
