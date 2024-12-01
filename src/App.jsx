import { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header/Header";
import Prom from "./components/Prom/Prom";
import Home from "./pages/Home"; 
import AboutUs from "./pages/AboutUs";
import Basket from "./pages/Basket";

function App() {
  const location = useLocation();

  return (
    <>
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/prom" element={<Prom />} /> 
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Basket />} />
        </Routes>
    </>
  );
}

export default App;