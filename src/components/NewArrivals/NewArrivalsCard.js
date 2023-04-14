import React from 'react';

const NewArrivalsCard = ({ card }) => {
    const { img, brand, name, price, oldPrice } = card;

    return (
        <div data-aos="fade-up"
        data-aos-duration="3000"  className='mx-auto lg:w-[200px] lg:h-[350px] md:w-[200px] md:h-[350px] sm:w-[140px] sm:h-[290px] cursor-pointer  hover:shadow-lg hover:shadow-gray-200/50 mb-6 '>
            <img src={img} className='w-full lg:h-[260px] md:h-[260px] sm:h-[190px]' alt="" />
            <div className="pt-2 pl-2">
            <h5 className='lg:text-[13px] md:text-[12px] sm:text-[11px] text-gray-400'>{brand}</h5>
            <h1 className='lg:text-[14px] md:text-[13px] sm:text-[12px]'>{name}</h1>
            <p className='lg:text-[14px] md:text-[13px] sm:text-[12px]'>${price}</p>
            <p className='lg:text-[14px] md:text-[13px] sm:text-[12px] text-gray-300'>{oldPrice}</p>
            
            </div>
        </div>
    );
};

export default NewArrivalsCard;