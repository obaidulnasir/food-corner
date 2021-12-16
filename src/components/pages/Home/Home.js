import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import ProductSection from './ProductSction/ProductSection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Category></Category>
            <ProductSection></ProductSection>
        </div>
    );
};

export default Home;