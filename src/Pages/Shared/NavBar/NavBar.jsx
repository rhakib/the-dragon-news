import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userPic from '../../../assets/user.png' 
import useAuth from '../../../Providers/AuthContext/useAuth';

const NavBar = () => {

    const navigate =  useNavigate()

    const {logOut, user} = useAuth()
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>

    const handleSignOut = () => {
        logOut()
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate('/login')
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userPic} />
                    </div>
                </label>
                {user ? <button onClick={handleSignOut}>Logout</button> : <Link to='/login'>
                    <button className='btn'> Login </button>
                </Link>}
            </div>
        </div>
    );
};

export default NavBar;