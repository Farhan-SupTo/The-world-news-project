import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <Container className='mt-4 '>
         <div className='text-center '>
            <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM D, h:mm:ss a")}</p>
        </div>
        <div className='d-flex'>
        <Button variant="danger">Latest</Button>
        <Marquee className='text-danger' speed={60} gradient='white'>
        Jude Bellingham scored his 14th goal of the season as Real Madrid returned to the top of La Liga with a 3-0 victory at lowly Cadiz. ‘Messi’s heir’ set to face off against eternal rival in Barcelona vs Porto clash . 
</Marquee>
        </div>
        <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-semibold">
            <Nav.Link href="#features">
              <Link className='text-body-tertiary text-decoration-none' to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="dark">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </Container>
    );
};

export default Header;