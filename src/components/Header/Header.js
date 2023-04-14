import React from 'react';
import bannerImage from '../../images/banner/HeaderBanner..png'
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerImage})`, backgroundRepeat: 'no-repeat' }}
            className=' lg:h-[700px] w-screen bg-cover md:h-[500px] sm:h-[400px]'>

            {/* Navbar */}
            <Nav></Nav>

            {/* Header content */}
            <div className="text-white text-center lg:pt-[12%] md:pt-[12%] sm:pt-[12%]">
                <h4 className='lg:text-[24px] md:text-[22px] sm:text-[18px] font-[300]'>Don't Miss</h4>
                <h1 className='lg:text-[60px] md:text-[56px] sm:text-[48px] font-[400] lg:leading-[58px] md:leadeing-[52px] sm:leading-[48px]'>Mystery <br /> Deals</h1>
                <h4 className='lg:text-[24px] md:text-[22px] sm:text-[18px] font-[300] pb-5 pt-1'>Only Online</h4>
                <button className='text-white border border-white rounded-full text-center uppercase lg:px-5 md:px-4 sm:px-3 lg:py-2 md:py-2 sm:py-1 lg:text-[14px] md:text-[13px] sm:text-[11px] hover:text-gray-6 00 hover:bg-gray-400 hover:border-gray-400 transition-all duration-300 ease-in-out'><span>Discover NOW</span></button>

            </div>
        </div>
    );
};

export default Header;