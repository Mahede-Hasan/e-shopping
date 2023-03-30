import React, { useEffect, useState } from 'react';
import NewArrivalsCard from './NewArrivalsCard';

const NewArrivalsCards = () => {
    const [newArrivalsCards, setNewArrivalsCards] = useState([])

    useEffect(() => {
        fetch('products/newArrivals.json')
            .then(res => res.json())
            .then(data => setNewArrivalsCards(data))
    }, [])
    return (
        <div>
            {/* New Arrival Cards */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid:cols-2 ">
                {
                    newArrivalsCards.map(card => <NewArrivalsCard key={card.id} card={card}></NewArrivalsCard>)
                }
            </div>

            {/* Load More Button */}
            <div className='flex justify-center my-4'>
                <button className='uppercase text-red-500 text-[12px] rounded-full border-[1px] border-gray-200 py-1 px-4 hover:bg-slate-200 hover:border-slate-200 hover:text-red-700 transition-all ease-in-out duration-500'>Load More</button>
            </div>
        </div>
    );
};

export default NewArrivalsCards;