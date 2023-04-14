import React from 'react';
import Categories from '../Categories/Categories';
import CollectionAdvertise from '../CollectionAdvertise/CollectionAdvertise';
import GalleryAndService from '../GalleryAndService/GalleryAndService';
import NewCollectionBanner from '../MiddleBanner/NewCollectionBanner';
import NewArrivals from '../NewArrivals/NewArrivals';
import TrendyProducts from '../TrendyProducts/TrendyProducts';

const Home = () => {
    return (
        <div>
            <Categories></Categories>
            <TrendyProducts></TrendyProducts>
            <NewCollectionBanner></NewCollectionBanner>
            <CollectionAdvertise></CollectionAdvertise>
            <NewArrivals></NewArrivals>
            <GalleryAndService></GalleryAndService>
        </div>
    );
};

export default Home;