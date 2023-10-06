import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Providers/AuthContext/useAuth';


const Login = () => {
    const navigate =  useNavigate()
    const location = useLocation()
    console.log(location);

    const {logIn} = useAuth()

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
        .then(res => {
            console.log(res.user)
            //navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(err => console.log(err))

        
    }

    return (
        <div>
            <NavBar></NavBar>
            <h2 className='text-3xl font-semibold text-center mb-4'>Please Login</h2>
            <div className="hero h-[70vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="Email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="Password" className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='m-3'>Don&apos;t have an account? <Link className='font-semibold text-blue-600' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
