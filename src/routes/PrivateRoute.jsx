import React from 'react';
import useAuth from '../Providers/AuthContext/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading) {
        return <div className='flex justify-center'><span className="loading loading-infinity loading-lg"></span></div>
    }


    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;