import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import EventSection from './EventsSection/EventSection';
import ProductSection from './ProductSction/ProductSection';
import Reservation from './Reservation/Reservation';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Category></Category>
            <ProductSection></ProductSection>
            <EventSection></EventSection>
            <Reservation></Reservation>
            
        </div>
    );
};

export default Home;