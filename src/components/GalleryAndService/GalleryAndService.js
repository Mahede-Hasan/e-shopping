import React from 'react';
import PhotosGallery from './PhotosGallery';
import ServicePolicy from './ServicePolicy';

const GalleryAndService = () => {
    return (
        <div className='px-[120px] py-[60px] bg-gray-50'>
            {/* Photos Gallery */}
            <PhotosGallery></PhotosGallery>

            {/* ServicePolicy */}
            <ServicePolicy></ServicePolicy>
        </div>
    );
};

export default GalleryAndService;