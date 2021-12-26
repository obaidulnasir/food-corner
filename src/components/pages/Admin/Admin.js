import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import AddProduct from './AddProduct/AddProduct';

const Admin = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AddProduct></AddProduct>
        </div>
    );
};

export default Admin;