import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loader} =useContext(AuthContext)
    const location =useLocation()
    console.log(location)
    if(loader){
        return <Spinner className='mx-auto mt-5' animation="border" variant="danger" />
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;