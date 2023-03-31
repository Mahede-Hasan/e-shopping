import React from 'react';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <div className='px-[120px]'>
            {/* Footer Content */}
            <FooterContent></FooterContent>

            {/* Divider */}
            <hr className='h-[1px] w-full bg-gray-400 mb-8' />

            {/* Footer end Text */}
            <div className="grid grid-cols-2 pb-5">

                {/* Half */}
                <div className="text-gray-400 flex">
                    <p className='text-[12px] pr-4'>Copyright © 2023 Locale. All Rights Reserved.</p>
                    <div className="flex">
                        <p className='text-[12px] border-b-[1px] cursor-pointer hover:text-gray-600 transition-all duration-300 ease-in-out'>Terms Of Use</p>
                        <hr className='h-[10px] w-[1px] bg-gray-300 mx-2 mt-1' />
                        <p className='text-[12px] border-b-[1px] cursor-pointer hover:text-gray-600 transition-all duration-300 ease-in-out'>Terms Of Use</p>
                    </div>
                </div>

                {/* Half */}
                <div className="">
                    <p className='text-[12px] text-center text-gray-400 cursor-pointer hover:text-gray-600 transition-all duration-300 ease-in-out'>Social Media</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;