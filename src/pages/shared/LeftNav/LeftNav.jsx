import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css'
import { ListGroup } from "react-bootstrap";

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
    </div>
  );
};

export default LeftNav;
