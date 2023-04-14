import React from 'react';
import { Link } from 'react-router-dom';
import categoryImg1 from '../../images/banner/banner-1.jpg.png'
import categoryImg2 from '../../images/banner/banner-2.jpg.png'
import categoryImg3 from '../../images/banner/banner-3.jpg.png'


const Categories = () => {
    return (
        <div className='appearance-none lg:px-[120px] md:px-[70px] sm:mx-auto w-full lg:h-[500px] md:h-[400px]  mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4 my-[81px]'>

            {/* Category-1 */}
            <div data-aos="fade-right"
     data-aos-duration="3000" className="div-1 relative drop-shadow-md lg:h-[500px] lg:w-full md:h-[400px] md:w-full sm:h-[320px] sm:w-[300px] sm:mx-auto">

                {/* border */}
                <div className=" lg:h-[480px] lg:w-[95%] md:h-[380px] md:w-[95%] sm:w-[280px] sm:h-[300px]  mx-[12px] my-[10px] border-[3px] border-neutral-200 absolute"></div>

                {/* content */}
                <div className="content absolute flex flex-col justify-center pt-[35%] pl-[8%] text-white">
                    <p className='text-[13px] text-gray-100'>Trending now</p>
                    <h3 className='text-2xl py-2'>This Week's <br /> Most Wanted</h3>
                    <a href="" className='text-[13px] text-gray-100 hover:text-gray-400'>Discover Now</a>
                </div>

                {/* image */}
                <img className='lg:w-full lg:h-[500px] md:h-[400px] sm:h-full sm:w-full' src={categoryImg1} alt="" />

            </div>

            <div className="grid grid-cols-1 gap-4">

                {/* Category-2 */}
                <div data-aos="fade-left"
     data-aos-duration="3000" className="div-2 relative drop-shadow-md lg:h-[242px] md:h-[192px] md:w-full sm:h-[180px] sm:w-[320px] mx-auto">

                    {/* content */}
                    <div className="content absolute flex flex-col justify-center pt-[16%] pl-[4%]">
                        <p className='text-[12px] text-gray-400'>Limited time only</p>
                        <h3 className='text-md py-2 font-semibold'>Trainers & Sportwear <br />
                            Sale Up to 70% off</h3>
                        <a href="" className='text-[12px] hover:text-gray-400 transition-all ease-in-out duration-500'>Shop Now</a>
                    </div>

                    {/* image */}
                    <img className='lg:w-full lg:h-full md:h-full md:w-full sm:h-full sm:w-full' src={categoryImg2} alt="" />
                </div>

                {/* Category-3 */}
                <div data-aos="fade-left"
     data-aos-duration="3000" className="div-3 relative drop-shadow-md lg:h-[242px] md:h-[192px] md:w-full sm:h-[180px] sm:w-[320px] mx-auto">

                    {/* content */}
                    <div className="content absolute flex flex-col justify-center pt-[16%] pl-[4%]">
                        <p className='text-[12px] text-gray-400'>This week we love...</p>
                        <h3 className='text-md py-2 font-semibold'>Womens <br />
                            Holiday Clothes</h3>
                        <a href="#" className='text-[12px] hover:text-gray-400 transition-all ease-in-out duration-500'>Discover Now</a>
                    </div>

                    <img className='lg:w-full lg:h-full md:h-full md:w-full sm:h-full sm:w-full' src={categoryImg3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Categories;