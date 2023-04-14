import React from 'react';
import middleBanner from '../../images/banner/div.png'

const NewCollectionBanner = () => {
    return (
        <div style={{backgroundImage: `url(${middleBanner})`, backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className='w-[100%] lg:h-screen md:h-screen sm:h-[400px] lg:mb-[80px] md:mb-[60px] sm:mb-[30px] bg-cover'>
            
        </div>
    );
};

export default NewCollectionBanner;