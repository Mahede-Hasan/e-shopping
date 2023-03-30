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
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center items-center'>
            <img className='w-[190px] h-[190px]' src={photo1} alt="" />
            <img className='w-[190px] h-[190px]' src={photo2} alt="" />
            <div className='w-[190px] h-[190px] border-[1px] border-gray-200 cursor-pointer hover:bg-slate-200 transition-all duration-500 ease-in-out bg-white'>

                <h4 className='text-[13px] text-center text-gray-400 font-light pt-[45%]'>Handle Instagram</h4>
                <p className='text-[13px] text-red-500 text-center pt-3'>Follow</p>
            </div>
            <img className='w-[190px] h-[190px]' src={photo3} alt="" />
            <img className='w-[190px] h-[190px]' src={photo4} alt="" />
            <img className='w-[190px] h-[190px]' src={photo5} alt="" />
            <img className='w-[190px] h-[190px]' src={photo6} alt="" />
            <img className='w-[190px] h-[190px]' src={photo7} alt="" />
            <img className='w-[190px] h-[190px]' src={photo8} alt="" />
            <img className='w-[190px] h-[190px]' src={photo9} alt="" />
        </div>
    );
};

export default PhotosGallery;