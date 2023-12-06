import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const [accepted,setAccepted] =useState(false)
   const {createUser} =useContext(AuthContext)

   const handleRegister = (event)=>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photoURL = form.photo.value 
    const email = form.email.value
    const password = form.password.value

    console.log(name,photoURL,email,password)
    createUser(email,password)
    .then(result=>{
      const createdUser =result.user 
      console.log(createdUser)
    })
    .catch(error=>{
      console.log(error.message)
    })

   }

   const handleAcceptConditions = event =>{
    setAccepted(event.target.checked)
   }

    return (
        <Container className='w-25 mx-auto text-secondary align-items-center justify-content-center'>
            <h2 className='mb-5 mt-5 fw-bold text-center '>Register your account</h2>
            <Form onSubmit={handleRegister}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter your Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold '>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className='fw-medium ' 
        onClick={handleAcceptConditions}
        type="checkbox" 
        label={<>Accept <Link to='/terms'>Term & Conditions</Link></>} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control className='bg-secondary text-white fw-medium ' type="submit" disabled ={!accepted} placeholder="Login" />
      </Form.Group>
      <div className="text-muted fw-medium mx-auto text-center">
      Already have an account ?<Link to='/login' className='text-decoration-none text-danger'> Please login</Link>
        </div>
    </Form>
        </Container>
    );
};

export default Register;