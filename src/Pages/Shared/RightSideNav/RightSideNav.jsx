import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-6'>
                <h2 className="font-semibold text-xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="font-semibold text-xl">Find Us On</h2>
                <a className='p-4 flex gap-3 items-center text-lg border rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 flex gap-3 items-center text-lg border-x' href="">
                    <FaTwitter></FaTwitter>
                    Twiter
                </a>
                <a className='p-4 flex gap-3 items-center text-lg border rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/*q zone*/}
            <div className='p-4 space-y-4 mb-6'>
                <h2 className="font-semibold text-xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;