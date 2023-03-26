import React from 'react';
import { Link } from 'react-router-dom';
import categoryImg1 from '../../images/banner/banner-1.jpg.png'
import categoryImg2 from '../../images/banner/banner-2.jpg.png'
import categoryImg3 from '../../images/banner/banner-3.jpg.png'


const Categories = () => {
    return (
        <div className='appearance-none px-[140px] md:px-[120px] sm:px-[90px] grid md:grid-cols-2 sm:grid-cols-1 gap-4 py-[81px]'>

            {/* Category-1 */}
            <div className="div-1 w-[500px] lg:h-[500px] md:h-[400px] sm:h-[400px]">

                {/* border */}
                <div className="w-[470px] lg:h-[470px] md:h-[370px] sm:h-[370px] border-[3px] border-neutral-200 absolute mx-4 my-4"></div>

                {/* content */}
                <div className="content absolute flex flex-col justify-center pt-[15%] pl-[4%] text-white">
                    <p className='text-[13px] text-gray-100'>Trending now</p>
                    <h3 className='text-2xl py-2'>This Week's <br /> Most Wanted</h3>
                    <a href="" className='text-[13px] text-gray-100 hover:text-gray-400'>Discover Now</a>
                </div>

                {/* image */}
                <img className='w-[500px] lg:h-[500px] md:h-[400px] sm:h-[400px]' src={categoryImg1} alt="" />



            </div>

            <div className="grid grid-cols-1 gap-4">
                {/* Category-2 */}
                <div className="div-2">

                    {/* content */}
                    <div className="content absolute flex flex-col justify-center pt-[6%] pl-[4%]">
                        <p className='text-[12px] text-gray-400'>Limited time only</p>
                        <h3 className='text-md py-2 font-semibold'>Trainers & Sportwear <br />
                            Sale Up to 70% off</h3>
                        <a href="" className='text-[12px] hover:text-gray-400'>Shop Now</a>
                    </div>


                    {/* image */}
                    <img className='w-[574px] lg:h-[242px] md:h-[192px] sm:h-[192px]' src={categoryImg2} alt="" />
                </div>

                {/* Category-3 */}
                <div className="div-3">

                    {/* content */}
                    <div className="content absolute flex flex-col justify-center pt-[6%] pl-[4%]">
                        <p className='text-[12px] text-gray-400'>This week we love...</p>
                        <h3 className='text-md py-2 font-semibold'>Womens <br />
                            Holiday Clothes</h3>
                        <a href="" className='text-[12px] hover:text-gray-400'>Discover Now</a>
                    </div>

                    <img className='w-[574px] lg:h-[242px] md:h-[192px] sm:h-[192px]' src={categoryImg3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Categories;