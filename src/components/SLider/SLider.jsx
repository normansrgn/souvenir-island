import React, { useState, useEffect } from "react";
import "./Slider.scss";

import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3]; // Массив с изображениями

  // Функция для переключения на следующий слайд
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Автоплей с интервалом 3 секунды
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, []);

  return (
    <div className="slider">
      <div
        className="slider__images"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="slider__image-container">
            <img src={img} alt={`Slide ${index + 1}`} className="slider__image" />
          </div>
        ))}
      </div>
    </div>
  );
}