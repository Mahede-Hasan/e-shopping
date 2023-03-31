import React from 'react';
import TrendyCards from './TrendyCards';

const TrendyProducts = () => {
    return (
        <div className='px-[120px] py-10'>

            {/* Header Content */}
            <h1 className='text-2xl font-bold text-center pb-4'>Trendy Products</h1>

            {/* Trendy Product Menu */}
            <div className="flex justify-center pb-6">
                <ul className='flex text-gray-400 text-base font-[400] pt-2 pb-4 uppercase'>
                    <li className='px-4 hover:text-red-500 hover:border-red-500 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">all</a></li>
                    <li className='px-4 hover:text-red-500 hover:border-red-500 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">women</a></li>
                    <li className='px-4 hover:text-red-500 hover:border-red-500 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">men</a></li>
                    <li className='px-4 hover:text-red-500 hover:border-red-500 hover:border-b-[1px] transition-all duration-100 delay-75'><a href="">accessories</a></li>
                </ul>
            </div>

            {/* Trendy Cards */}
            <TrendyCards></TrendyCards>

        </div>
    );
};

export default TrendyProducts;