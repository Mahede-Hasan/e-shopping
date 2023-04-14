import React from 'react';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <div className='lg:px-[120px] md:px-[70px] sm:px-[40px]'>
            {/* Footer Content */}
            <FooterContent></FooterContent>

            {/* Divider */}
            <hr className='h-[1px] w-full bg-gray-400 mb-8' />

            {/* Footer end Text */}
            <div className="flex justify-evenly mb-8">

                {/* Half */}
                <div className="text-gray-400 grid grid-cols-2">
                    <p className='lg:text-[12px] md:text-[11px] sm:text-[10px] pr-4'>Copyright © 2023 Locale. All Rights Reserved.</p>
                    <div className="flex">
                        <p className='lg:text-[12px] md:text-[11px] sm:text-[10px] underline cursor-pointer hover:text-gray-600 transition-all duration-300 ease-in-out'>Terms Of Use</p>
                        <hr className='h-[10px] w-[1px] bg-gray-300 mx-2 mt-1' />
                        <p className='lg:text-[12px] md:text-[11px] sm:text-[10px] underline cursor-pointer hover:text-gray-600 transition-all duration-300 ease-in-out'>Terms Of Use</p>
                    </div>
                </div>

                {/* Half */}
                <div className="">
                    <p className='lg:block md:block sm:hidden lg:text-[12px] md:text-[11px] sm:text-[10px] text-center text-gray-400 cursor-pointer hover:text-gray-600 transition-all duration-300 ease-in-out'>Social Media</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;