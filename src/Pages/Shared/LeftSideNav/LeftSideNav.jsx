import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import p1 from '../../../assets/1.png'
import p2 from '../../../assets/2.png'
import p3 from '../../../assets/3.png'
import moment from 'moment/moment';
import { AiTwotoneCalendar } from 'react-icons/ai';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='space-y-4 p-4'>
            <h2 className='text-2xl'>All Categories</h2>
            {
                categories.map(category => <Link className='block ml-8 text-xl' key={category.id}>{category.name}</Link>)
            }
            <div className="bg-base-100 space-y-3">
                <figure><img src={p1} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </div>
                <div className='flex gap-6'>
                    <p className='font-semibold'>Sports</p>
                    <p className='flex gap-2 items-center'><span className='text-xl'><AiTwotoneCalendar></AiTwotoneCalendar></span>{moment().format("MMM Do YY")}</p>
                </div>
            </div>
            <div className="bg-base-100 space-y-3">
                <figure><img src={p2} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </div>
                <div className='flex gap-6'>
                    <p className='font-semibold'>Sports</p>
                    <p className='flex gap-2 items-center'><span className='text-xl'><AiTwotoneCalendar></AiTwotoneCalendar></span>{moment().format("MMM Do YY")}</p>
                </div>
            </div>
            <div className="bg-base-100 space-y-3">
                <figure><img src={p3} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                </div>
                <div className='flex gap-6'>
                    <p className='font-semibold'>Sports</p>
                    <p className='flex gap-2 items-center'><span className='text-xl'><AiTwotoneCalendar></AiTwotoneCalendar></span>{moment().format("MMM Do YY")}</p>
                </div>
            </div>

        </div>
    );
};

export default LeftSideNav;