import React from 'react';

const ServicePolicy = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-12'>

            {/* Service-1 */}
            <div data-aos="fade-up"
                data-aos-duration="3000" className='mx-auto cursor-pointer hover:shadow-lg hover:shadow-gray-200/50 w-full lg:pl-[20%] md:pl-[18%] sm:pl-[20%] my-4 py-4'>
                <h3 className='text-[14px] font-semibold'>Payment & Delivery</h3>
                <p className='text-[12px] font-light text-slate-500'>Free shipping for orders over $50</p>
            </div>

            {/* Service-2 */}
            <div data-aos="fade-up"
                data-aos-duration="3000" className='mx-auto cursor-pointer hover:shadow-lg hover:shadow-gray-200/50 w-full lg:pl-[20%] md:pl-[18%] sm:pl-[20%] my-4 py-4'>
                <h3 className='text-[14px] font-semibold'>Return & Refund</h3>
                <p className='text-[12px] font-light text-slate-500'>Free 100% money back guarantee</p>
            </div>

            {/* Service-3 */}
            <div data-aos="fade-up"
                data-aos-duration="3000" className='mx-auto cursor-pointer hover:shadow-lg hover:shadow-gray-200/50 w-full lg:pl-[20%] md:pl-[18%] sm:pl-[20%] my-4 py-4'>
                <h3 className='text-[14px] font-semibold'>Quality Support</h3>
                <p className='text-[12px] font-light text-slate-500'>Alway online feedback 24/7</p>
            </div>
        </div>
    );
};

export default ServicePolicy;