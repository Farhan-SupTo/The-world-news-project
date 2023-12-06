import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
  const navigate =useNavigate()
  const location =useLocation()
  console.log(location)
  const from =location.state?.from?.pathname || '/login'

const { signIn } =useContext(AuthContext)

const handleSignIn = event =>{
  event.preventDefault()
  const form =event.target 
  const email =form.email.value 
  const password =form.password.value
  console.log(email,password) 
  signIn(email,password)
  .then(result =>{
    const signInUser =result.user 
    console.log(signInUser)
    navigate(from,{replace:true})
  })
  .catch(error=>{
    console.log(error.message)
  })

}

    return (
        <Container className='w-25 my-auto  text-secondary align-items-center justify-content-center'>
            <h2 className='mb-5 mt-5 fw-bold text-center '>Login your account</h2>
            <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold '>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold '>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control className='bg-secondary text-white fw-medium ' type="submit" placeholder="Login" />
      </Form.Group>
      <div className="text-muted fw-medium mx-auto text-center">
      Don’t Have An Account ?<Link to='/register' className='text-decoration-none text-danger'> Please register</Link>
        </div>
    </Form>
        </Container>
    );
};

export default Login;