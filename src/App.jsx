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
<<<<<<< HEAD
import FeatureCard from "./components/FeatureCard"
import "./App.css"
import FeatureSection from "./components/FeaturesSection"
=======
import "./App.css"
>>>>>>> a2fc7a6 ([SE-29] - merge conflict solved)

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
    </>
  )
}

export default App
