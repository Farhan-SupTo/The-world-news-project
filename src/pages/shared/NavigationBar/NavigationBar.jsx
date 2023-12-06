import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {

    const {user,logOut} =useContext(AuthContext)


    const handleLogOut= () =>{
           logOut()
           .then()
           .catch(error=>{
            console.log(error.message)
           })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg">
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-semibold">
           
              <Link className='text-body-tertiary text-decoration-none mt-2' to='/category/0'>Home</Link>
        
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
           {user && <Nav.Link href="#deets" className='mt-1 fw-medium '><FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
            </Nav.Link>}
         
            {user ?<Button variant="dark" className='mt-0' onClick={handleLogOut}>Logout</Button> :
            <Link to='/login'><Button variant="dark" className='mt-0'>Login</Button></Link>}
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </Container>
    );
};

export default NavigationBar;