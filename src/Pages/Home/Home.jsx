import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-2 p-3'>
                    {
                        news.map(singleNews => <NewsCard key={singleNews.id} singleNews={singleNews}></NewsCard>)
                    }
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;