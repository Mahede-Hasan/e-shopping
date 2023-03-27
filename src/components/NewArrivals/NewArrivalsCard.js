import React from 'react';

const NewArrivalsCard = ({ card }) => {
    const { img, brand, name, price, oldPrice } = card;

    return (
        <div className='w-[200px] h-[350px] mb-6 cursor-pointer mx-auto hover:transform-1'>
            <img src={img} className='w-[200px] h-[260px]' alt="" />
            <div className="pt-2">
            <h5 className='text-[13px] text-gray-400'>{brand}</h5>
            <h1 className='text-[14px]'>{name}</h1>
            <p className='text-[14px]'>${price}</p>
            <p className='text-[14px] text-gray-300'>{oldPrice}</p>
            
            </div>
        </div>
    );
};

export default NewArrivalsCard;