import React, { useEffect, useState } from 'react';
import TrendyCard from './TrendyCard';

const TrendyCards = () => {
    const [trendyProducts, setTrendyProducts] = useState([])

    useEffect(() => {
        fetch('products/trendyProducts.json')
            .then(res => res.json())
            .then(data => setTrendyProducts(data))
    }, [])
    return (
        <div>
            <div className="relative" >
                {/* <!-- Carousel wrapper --> */}
                <div className="">
                    {/* <!-- Item 1 --> */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" >
                        {
                            trendyProducts.map(card => <TrendyCard key={card.id} card={card}></TrendyCard>)
                        }
                    </div>

                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-50 lg:flex md:flex space-x-3 -translate-x-1/2 bottom-0 left-1/2 sm:hidden">
                    <button type="button" className="w-2 h-2 bg-slate-600 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-2 h-2 rounded-full bg-slate-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>

                </div>

            </div>


        </div>
    );
};

export default TrendyCards;