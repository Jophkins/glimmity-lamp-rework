import React from 'react';
import ProductList from '../../components/ProductList';
import SecondNavbar from '../../components/SecondNavbar';

const AllProductsPage = () => {
  return (
    <>
      <SecondNavbar />
      <div className="row">
        <ProductList />
      </div>
    </>
  );
};

export default AllProductsPage;
