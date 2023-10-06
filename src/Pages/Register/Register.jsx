import NavBar from '../Shared/NavBar/NavBar';
import { Link } from 'react-router-dom';
import useAuth from '../../Providers/AuthContext/useAuth';

const Register = () => {
    const {createUser} = useAuth()
    const handleRegiser = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const img = form.get('img');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, name, img, password);

        createUser(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err))


    }
    return (
        <div>
            <NavBar></NavBar>
            <h2 className='text-3xl font-semibold text-center mb-4'>Please Register</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegiser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='img' required placeholder="Photo URL" className="input input-bordered"  />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='m-3'>Already have an account? <Link className='font-semibold text-blue-600' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;