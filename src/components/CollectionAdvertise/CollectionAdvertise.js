import React from 'react';
import newProduct1 from '../../images/products/product-13.jpg.png'
import newProduct2 from '../../images/products/product-14.jpg.png'
import newProductBanner from '../../images/banner/banner-4.jpg.png'

const CollectionAdvertise = () => {
    return (
        <div className='mt-[120px] mb-[60px] mx-[120px]'>

            <section className="grid grid-cols-2">

                {/* First Half area */}
                <div className="flex justify-center items-center">

                    <div>
                        {/* content */}
                        <div className="text-center">
                            <p className='text-[12px] text-red-400'>Spacial</p>
                            <h3 className='text-xl py-2'>Refine Your Style.</h3>
                            <p className='text-[12px] text-gray-400'>Get on our exclusive email list and be the first to hear <br /> about sales, coupons, new arrivals and more!</p>
                        </div>

                        {/* Cards */}
                        <div className="flex pt-8">

                            {/* Card-1 */}
                            <div className="Card-1 mr-4">
                                <img className='w-[150px] h-[200px]' src={newProduct1} alt="" />
                                <p className='text-[12px]'>Rib-knit cardigan</p>
                                <p className='text-[12px]'>$24.99</p>
                            </div>

                            {/* Card-2 */}
                            <div className="Card-2">
                                <img className='w-[150px] h-[200px]' src={newProduct2} alt="" />
                                <p className='text-[12px]'>Linen-blend trousers</p>
                                <p className='text-[12px]'>$19.99</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Half Area */}
                <div style={{ backgroundImage: `url(${newProductBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className="w-full h-[580px] text-white">

                    {/* content */}
                    <div className="pt-[40%] pl-6">
                        <h3 className='text-xl font-semibold pb-5'>Casual basics and <br /> trendy key pieces.</h3>
                        <p className='text-[12px] text-gray-200 pb-3'>in this look</p>

                        <ul className='text-[13px] list-disc pl-4 pb-4'>
                            <li>Rib-knit cardigan</li>
                            <li>Linen-blend paper bag trousers</li>
                        </ul>

                        <p className='text-[13px] text-gray-200 pb-3'>$19.99 - $48.00</p>
                        
                        <button className='text-[13px] border-[2px] rounded-full px-4 py-1'>BUY NOW</button>
                    </div>
                </div>
            </section>


            {/* Divider */}
            <div className='h-[1px] w-full bg-slate-100 mt-[60px]'></div>
        </div>
    );
};

export default CollectionAdvertise;