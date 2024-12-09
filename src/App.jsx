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
import Reg from "./pages/auth/Reg";
import UserPage from "./pages/UserProfile";
import Login from "./pages/auth/Log";

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
          <Route path="/reg" element={<Reg />} />
          <Route path="/log" element={<Login />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
    </>
  );
}

export default App;