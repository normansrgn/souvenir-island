import React from "react";
import Prom from "../components/Prom/Prom";
import Search from "../components/search/Search";
import Cards from "../components/Cards/Cards";
import Slider from "../components/SLider/SLider";

export default function Home() {
  return (
    <>
      <Prom />
      {/* <Slider /> */}
      <Cards />
    </>
  );
}
