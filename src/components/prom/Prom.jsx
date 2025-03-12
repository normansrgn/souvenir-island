import React from "react";
import "./Prom.scss";

import img1 from "./img/1.png";
import img2 from "./img/2.png";
import Slider from "../SLider/SLider";

export default function Prom() {
  return (
    <section className="prom">
      <img src={img1} alt="" className="prom__img-left" />
      <Slider />

      <img src={img2} alt="" className="prom__img-right" />
    </section>
  );
}