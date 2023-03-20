import React from 'react';
import logo from '../../../images/pictures/locale 1.png'

const Nav = () => {
    return (
        <div className='flex items-center justify-between px-4 pt-[18px]'>

            {/* logo and menu */}

            <div className='flex '>

                {/* logo */}
                <img src={logo} alt="" />

                {/* menu */}
                <ul className='flex text-white text-base pt-2 pb-4'>
                    <li className='px-5 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">HOME</a></li>
                    <li className='px-5 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">MEN</a></li>
                    <li className='px-5 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">WOMEN</a></li>
                    <li className='px-5 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">KIDS</a></li>
                    <li className='px-5 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">SEASONAL</a></li>
                </ul>

            </div>

            {/* search field */}
            <div className=' mr-[100px]'>
                <input type="search" placeholder='Search Product..' className='bg-transparent outline-0 border border-l-0 border-r-0 border-t-0 text-sm text-white placeholder-white pb-1 pl-2' />

                <button className='absolute right-[120px]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white font-semibold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>

            </div>

        </div>
    );
};

export default Nav;