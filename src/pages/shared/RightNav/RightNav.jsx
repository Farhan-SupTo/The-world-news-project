import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import Qzone from '../Q-zone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='w-75 mb-2 ' variant="outline-primary"><FaGoogle /> Login with Google</Button>
      <Button   className='w-75' variant="outline-secondary"><FaGithub /> Login with Github</Button>
      <div className='mt-1 mb-1'>
        <h4>Find Us on</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img className= 'mb-3 px-4 ' src={bg} alt="" />
      </div>
        </div>
    );
};

export default RightNav;