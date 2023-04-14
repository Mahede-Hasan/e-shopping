import React from 'react';
import newProduct1 from '../../images/products/product-13.jpg.png'
import newProduct2 from '../../images/products/product-14.jpg.png'
import newProductBanner from '../../images/banner/banner-4.jpg.png'

const CollectionAdvertise = () => {
    return (
        <div className='mt-[120px] mb-[60px] lg:mx-[120px] md:mx-[80px] sm:mx-[80px]'>

            <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2">

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
                            <div data-aos="fade-up"
                                data-aos-duration="3000"
                                className="Card-1 mr-4 cursor-pointer hover:shadow-lg hover:shadow-gray-200/50">
                                <img className='w-[150px] h-[200px]' src={newProduct1} alt="" />
                                <div className="pt-2 pl-2 pb-2">
                                    <p className='text-[12px]'>Rib-knit cardigan</p>
                                    <p className='text-[12px]'>$24.99</p>
                                </div>
                            </div>

                            {/* Card-2 */}
                            <div data-aos="fade-up"
                                data-aos-duration="3000"
                                className="Card-2 cursor-pointer hover:shadow-lg hover:shadow-gray-200/50">
                                <img className='w-[150px] h-[200px]' src={newProduct2} alt="" />
                                <div className="pt-2 pl-2 pb-2">
                                    <p className='text-[12px]'>Linen-blend trousers</p>
                                    <p className='text-[12px]'>$19.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Half Area */}
                <div style={{ backgroundImage: `url(${newProductBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                    data-aos="fade-left"
                    data-aos-duration="3000" className="lg:mt-0 md:mt-0 sm:mt-12 w-full lg:h-[550px] md:h-[450px] sm:h-[380px] text-white">

                    {/* content */}
                    <div className="lg:pt-[38%] md:pt-[37%] sm:pt-[25%] pl-6">
                        <h3 className='lg:text-xl md:text-lg sm:text-base font-semibold pb-5'>Casual basics and <br /> trendy key pieces.</h3>
                        <p className='text-[12px] text-gray-200 pb-3'>in this look</p>

                        <ul className='lg:text-[13px] md:text-[12px] sm:text-[11px] list-disc pl-4 pb-4'>
                            <li>Rib-knit cardigan</li>
                            <li>Linen-blend paper bag trousers</li>
                        </ul>

                        <p className='text-[13px] text-gray-200 pb-3'>$19.99 - $48.00</p>

                        <button className='text-[13px] border-[2px] rounded-full px-4 py-1 hover:bg-gray-300 hover:text-white transition-all duration-500 ease-in-out'>BUY NOW</button>
                    </div>
                </div>
            </section>


            {/* Divider */}
            <div className='h-[1px] w-full bg-slate-100 mt-[60px]'></div>
        </div>
    );
};

export default CollectionAdvertise;