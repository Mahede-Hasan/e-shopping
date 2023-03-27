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
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid:cols-2 ">
                {
                    newArrivalsCards.map(card=><NewArrivalsCard key={card.id} card={card}></NewArrivalsCard>)
                }
            </div>
        </div>
    );
};

export default NewArrivalsCards;