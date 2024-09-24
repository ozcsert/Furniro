<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "../src/pages/Homepage";
=======
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import BlogPage from "./pages/BlogPage";
import CheckoutPage from './pages/CheckoutPage';
import ComparisonPage from './pages/ComparisonPage';
import ProfilePage from './pages/ProfilePage';
import ShopPage from './pages/ShopPage';
import SingleProductPage from './pages/SingleProductPage';
import { Layout } from './Layout';
import "./App.css";
>>>>>>> develop

function App() {
  return (
    <>
<<<<<<< HEAD
      <Homepage />
=======
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/comparison/:ids" element={<ComparisonPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
          </Route>
        </Routes>
      </Router>
>>>>>>> develop
    </>
  );
}

export default App;
