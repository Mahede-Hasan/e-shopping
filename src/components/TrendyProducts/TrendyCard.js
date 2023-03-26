import React from 'react';

const TrendyCard = ({card}) => {
    const {img, name, brand, price} = card;
    return (
        <div className='w-[200px] h-[350px]'>
            <img src={img} className='w-[200px] h-[260px]' alt="" />
            <div className="pt-2">
            <h5 className='text-[13px] text-gray-400'>{brand}</h5>
            <h1 className='text-[14px]'>{name}</h1>
            <p className='text-[14px]'>${price}</p>
            </div>
        </div>
    );
};

export default TrendyCard;