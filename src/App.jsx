import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import { Container } from "react-bootstrap";
import { Routes, Route, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./components/Header/Header";
import Prom from "./components/Prom/Prom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Basket from "./pages/Basket";
import Reg from "./pages/auth/Reg";
import Login from "./pages/auth/Log";
import Checkout from "./components/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";
import Meterials from "./pages/Meterials/Meterials";
import Catalog from "./pages/Catalog/Catalog";
import UserProfile from "./pages/UserProfile";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DiscountToast from "./components/DiscountToast/DiscountToast"; // Добавь это

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="materials" element={<Meterials />} />
          <Route path="/" element={<Home />} />
          <Route path="/prom" element={<Prom />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Basket />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/log" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="catalog" element={<Catalog />} />
        </Routes>
      </main>
      <DiscountToast isAuthenticated={isAuthenticated} />
      <Footer />
    </>
  );
}

export default App;