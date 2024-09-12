import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import ContactPage from './pages/ContactPage/ContactPage';
import BlogPage from './pages/BlogPage/BlogPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ComparisonPage from './pages/ComparisonPage/ComparisonPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import { Layout } from './Layout';

const App = () => {
  return (

    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/comparison/:id1/:id2" element={<ComparisonPage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
          </Route>
        </Routes>
      </Router>
    </>

  )
}

export default App;