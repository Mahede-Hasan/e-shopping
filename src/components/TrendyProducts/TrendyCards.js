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
            <div id="default-carousel" class="relative h-[380px]" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div class=" relative  overflow-hidden h-[350px] w-full">
                    {/* <!-- Item 1 --> */}
                    <div class="flex justify-between " >
                        {
                            trendyProducts.map(card => <TrendyCard card={card}></TrendyCard>)
                        }
                    </div>

                </div>
                {/* <!-- Slider indicators --> */}
                <div class="absolute z-50 flex space-x-3 -translate-x-1/2 bottom-0 left-1/2">
                    <button type="button" class="w-2 h-2 bg-slate-600 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-2 h-2 rounded-full bg-slate-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>

                </div>

            </div>


        </div>
    );
};

export default TrendyCards;