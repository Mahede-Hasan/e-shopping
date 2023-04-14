import React from 'react';
import NewArrivalsCards from './NewArrivalsCards';
import { NavLink } from 'react-router-dom';

const NewArrivals = () => {
    // NavLink style
    let activeStyle = {
        color: 'red',
        borderBottom: '1px solid red',
    };

    return (
        <div className='lg:px-[120px] md:px-[70px] sm:px-[50px] my-10'>

            {/* Header Content */}
            <h1 className='text-2xl font-bold text-center pb-4'>New Arrivals</h1>

            {/* Trendy Product Menu */}
            <div className="flex justify-center pb-6">
                <ul className='flex text-gray-400 lg:text-[16px] md:text-[15px] sm:text-[12px] font-[400] pt-2 pb-4 uppercase'>
                    <li className='px-4 hover:text-red-500  transition-all duration-100 delay-75'><NavLink to='#' style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            } className="nav-menu">All</NavLink></li>
                    <li className='px-4 hover:text-red-500 hover:border-red-500 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">women</a></li>
                    <li className='px-4 hover:text-red-500 hover:border-red-500 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">men</a></li>
                    <li className='px-4 hover:text-red-500 hover:border-red-500 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">accessories</a></li>
                </ul>
            </div>

            {/* New Arrivals Cards */}
        <NewArrivalsCards></NewArrivalsCards>

        </div>
    );
};

export default NewArrivals;