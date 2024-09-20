<<<<<<< HEAD
import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import CheckoutPage from "./pages/CheckoutPage"
import ComparisonPage from "./pages/ComparisonPage"
import ProfilePage from "./pages/ProfilePage"
import ShopPage from "./pages/ShopPage"
import SingleProductPage from "./pages/SingleProductPage"
import { Layout } from "./Layout"
import FeatureCard from "./components/FeatureCard"
import "./App.css"
import FeatureSection from "./components/FeaturesSection"

function App() {
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
            <Route path="/comparison/:ids" element={<ComparisonPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
          </Route>
        </Routes>
      </Router>
      <FeatureSection />
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     
>>>>>>> 6defdcc ( [SE-11] - Created Product Grid components)
    </>
  );
}

export default App;
