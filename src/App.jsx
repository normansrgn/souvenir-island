import { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header/Header";
import Prom from "./components/Prom/Prom";
import Home from "./pages/Home"; 
import AboutUs from "./pages/AboutUs";

function App() {
  const location = useLocation();

  return (
    <>
      {/* <Container> */}
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/prom" element={<Prom />} /> 
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      {/* </Container> */}
    </>
  );
}

export default App;