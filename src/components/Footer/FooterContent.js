import React from 'react';
import footerLogo from '../../images/pictures/locale 1.png';
import paymentImage from '../../images/pictures/payments.png.png';

const FooterContent = () => {
    return (
        <div className='grid grid-cols-2 py-12'>

            {/* content and payment */}
            <div className="">
                {/* footer logo */}
                <img src={footerLogo} className='w-[158px] h-[49px]' alt="" />

                {/* footer header content */}
                <p className='text-[12px] text-gray-500 pt-1 pb-8'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>

                {/* contact */}
                <div className="flex justify-between pb-4">
                    <div className="">
                        <h4 className='text-[12px] text-gray-700 pb-1'>Got Question? Call us 24/7</h4>
                        <p className='text-[13px] text-lime-400 cursor-pointer'>+8801000000000</p>
                    </div>

                    {/* payment */}
                    <div className="">
                        <h4 className='text-[12px] text-gray-600 pb-2'>Payment Method</h4>

                        {/* bank payment image */}
                        <img src={paymentImage} className='h-[20px] w-[272px] cursor-pointer' alt="" />
                    </div>
                </div>
            </div>

            {/* information and customer service */}
            <div className="grid grid-cols-2 pt-2">

                {/* Information */}
                <div className="pl-[20%]">
                    <h1 className='text-[13px] font-semibold pb-4'>Information</h1>

                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>About Locale</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>How to shop on Locale</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>FAQ</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>Contact us</p>
                </div>

                {/* Customer Service */}
                <div className="pl-[20%]">
                    <h1 className='text-[13px] font-semibold pb-4'>Customer Service</h1>

                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>Payment Methods</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>Money-back guarantee!</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>Returns</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>Shipping</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>Terms and conditions</p>
                    <p className='text-[12px] text-gray-500 pb-2 cursor-pointer hover:text-gray-700'>Privacy Policy</p>
                </div>
            </div>

        </div>
    );
};

export default FooterContent;