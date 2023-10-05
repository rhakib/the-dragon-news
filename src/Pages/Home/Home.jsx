import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='border col-span-2'>
                    <h2 className="text-4xl">News Coming soon</h2>
                </div>
                <div className='border'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;