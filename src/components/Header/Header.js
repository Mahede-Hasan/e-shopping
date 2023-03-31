import React from 'react';
import bannerImage from '../../images/banner/HeaderBanner..png'
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <div style={{backgroundImage: `url(${bannerImage})`}} 
        className=' h-screen w-[100%]'>

            {/* Navbar */}
            <Nav></Nav>

            {/* Header content */}
            <div className="text-white text-center pt-[13%]"> 
            <h4 className='text-[24px] font-[300]'>Don't Miss</h4>
            <h1 className='text-[60px] font-[400] leading-[60px]	'>Mystery <br /> Deals</h1>
            <h4 className='text-[24px] font-[300] pb-5 pt-1'>Only Online</h4>
            <button className='text-white border border-white rounded-full text-center uppercase px-5 py-2 text-xs hover:text-gray-600 hover:bg-gray-200 hover:border-gray-200 transition-all duration-300 ease-in-out'><span>Discover NOW</span></button>

            </div>
        </div>
    );
};

export default Header;