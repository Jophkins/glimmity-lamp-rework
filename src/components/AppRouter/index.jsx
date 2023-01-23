import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from '../../pages/CartPage';
import MainPage from '../../pages/MainPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} exact />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
