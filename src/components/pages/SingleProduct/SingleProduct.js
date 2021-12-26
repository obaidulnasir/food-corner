import React from 'react';
import { useParams } from 'react-router';
import Navigation from '../../shared/Navigation/Navigation';

const SingleProduct = () => {
    const{id}= useParams();
    return (
        <div>
            <Navigation></Navigation>
            this is single product {id}
        </div>
    );
};

export default SingleProduct;