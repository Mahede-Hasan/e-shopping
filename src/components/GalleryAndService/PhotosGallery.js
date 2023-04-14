import React from 'react';
import photo1 from '../../images/products/1.jpg.png';
import photo2 from '../../images/products/2.jpg.png';
import photo3 from '../../images/products/3.jpg.png';
import photo4 from '../../images/products/4.jpg.png';
import photo5 from '../../images/products/5.jpg.png';
import photo6 from '../../images/products/6.jpg.png';
import photo7 from '../../images/products/7.jpg.png';
import photo8 from '../../images/products/8.jpg.png';
import photo9 from '../../images/products/9.jpg.png';

const PhotosGallery = () => {
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center items-center '>
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo1} alt="" />
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo2} alt="" />
            <div data-aos="fade-up"
                data-aos-duration="3000" className='flex justify-center items-center lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] h-[120px] border-[1px] mx-auto hover:drop-shadow-lg border-gray-200 cursor-pointer hover:bg-slate-200 transition-all duration-500 ease-in-out bg-white'>
                <span>
                    <h4 className='lg:text-[13px] md:text-[12px] sm:text-[11px] text-center text-gray-400 font-light '>Handle Instagram</h4>
                    <p className='text-[13px] text-red-500 text-center pt-3'>Follow</p></span>
            </div>
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo3} alt="" />
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo4} alt="" />
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo5} alt="" />
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo6} alt="" />
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo7} alt="" />
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo8} alt="" />
            <img data-aos="fade-up"
                data-aos-duration="3000" className='lg:w-[190px] lg:h-[190px] md:w-[170px] md:h-[170px] sm:w-[120px] sm:h-[120px] mx-auto cursor-pointer hover:drop-shadow-lg' src={photo9} alt="" />
        </div>
    );
};

export default PhotosGallery;