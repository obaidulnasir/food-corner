import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import EventSection from './EventsSection/EventSection';
import ProductSection from './ProductSction/ProductSection';
import Reservation from './Reservation/Reservation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Category></Category>
            <ProductSection></ProductSection>
            <EventSection></EventSection>
            <Reservation></Reservation>
            <Footer></Footer>
        </div>
    );
};

export default Home;