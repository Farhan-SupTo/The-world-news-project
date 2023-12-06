import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Accept Term & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi officiis a autem, libero expedita numquam delectus maxime ut excepturi provident voluptas voluptate totam. Laborum a optio officia non veritatis harum cupiditate distinctio, asperiores eaque molestias sapiente minima iste sit voluptas, molestiae quos, delectus ipsam rerum. Accusamus repellendus aliquam tenetur.</p>
            
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;