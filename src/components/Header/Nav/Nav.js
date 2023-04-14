import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/pictures/locale 1.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Nav.css'

const Nav = () => {
    // const navRef = useRef()

    // NavLink style
    let activeStyle = {
        color: 'white',
        borderBottom: '1px solid white',
    };

    // // responsive navbar
    // const showNavbar = () => {
    //     navRef.current.classList.toggle('responsive_nav')
    // }

    return (
        <div className='flex justify-between pt-[16px]'>

            {/* logo and menu */}

            <div className='flex justify-between'>

                {/* logo */}
                <img src={logo} className='pl-4 lg:w-[150px] lg:h-[50px] md:w-[120px] md:h-[44px] sm:w-[100px] sm:h-[38px]' alt="" />

                {/* menu */}
                <div className="nav-menu-container">

                <div className='nav-button w-6 text-white lg:hidden md:hidden absolute right-8 top-5'><Bars3Icon className='menu-icon'></Bars3Icon></div>

                    <ul className='lg:bg-transparent md:bg-transparent lg:flex md:flex lg:static md:static sm:hidden lg:text-[15px] md:text-[14px] sm:text-[13px] font-[300] text-white'>

                    {/* <div className='nav-button nav-close' onClick={showNavbar}><XMarkIcon className='menu-close-icon'></XMarkIcon></div> */}

                        <li className='lg:px-5 md:px-3 lg:pt-3 md:pt-2  hover:text-gray-200 transition-all duration-400 eas-in-out delay-75'><NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className='menu' to='/'>HOME</NavLink></li>
                        <li className='lg:px-5 md:px-3 lg:pt-3 md:pt-2 hover:text-gray-200 transition-all duration-400 eas-in-out delay-75'><NavLink to='#'>MEN</NavLink></li>
                        <li className='lg:px-5 md:px-3 lg:pt-3 md:pt-2 hover:text-gray-200 transition-all duration-400 eas-in-out delay-75'><NavLink to='#'>WOMEN</NavLink></li>
                        <li className='lg:px-5 md:px-3 lg:pt-3 md:pt-2 hover:text-gray-200 transition-all duration-400 eas-in-out delay-75'><NavLink to='#'>KIDS</NavLink></li>
                        <li className='lg:px-5 md:px-3 lg:pt-3 md:pt-2 hover:text-gray-200 transition-all duration-400 eas-in-out delay-75'><NavLink to='#'>SEASONAL</NavLink></li>
                    </ul>

                </div>

            </div>

            {/* search field */}
            <div className='lg:mr-[80px] md:mr-[50px] lg:block md:block sm:hidden'>
                <input type="search" placeholder='Search Product..' className='bg-transparent focus:outline-none focus:ring-0 focus:border-white lg:w-[200px] md:w-[140px] border-white border-b-1 border-l-0 border-r-0 border-t-0 lg:text-[14px] md:text-[11px] text-white placeholder-white pb-1 pl-2' />

                <button className='absolute lg:right-[90px] md:right-[50px] lg:top-[26px] md:top-[30px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-5 lg:h-5 md:w-4 md:h-4 text-white font-semibold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>

            </div>

        </div>
    );
};

export default Nav;