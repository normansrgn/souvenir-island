import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Кастомные стрелки
import Prom from "../components/Prom/Prom";
import productsData from "../components/Cards/data";
import Card from "../components/Cards/Card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.scss";
import WhyUs from "../components/whyus/whyus";

// Кастомные стрелки
const NextArrow = (props) => {
  const { onClick } = props;
  return <FaChevronRight className="custom-arrow next" onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <FaChevronLeft className="custom-arrow prev" onClick={onClick} />;
};

export default function Home() {
  // Берем 6 случайных товаров
  const shuffledProducts = [...productsData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  // Настройки слайдера
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    nextArrow: <NextArrow />, // Используем кастомные стрелки
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false, // Убираем стрелки на мобильных
          dots: true, // Оставляем точки для навигации
        },
      },
    ],
  };

  return (
    <>
      <Prom />

      <div className="home">
        <div className="home__us">
          <WhyUs />
        </div>
        <Container className="home__container">

          <div className="home__recomends">
            <div className="home__title">Магазин рекомендует:</div>

            <Slider {...settings} className="custom-slider">
              {shuffledProducts.map((product) => (
                <div key={product.id} className="custom-slide">
                  <Card
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    description={product.description}
                  />
                </div>
              ))}

            </Slider>



          </div>
          <div className="home__btn">
            <Link to="/catalog">
              <button className="home__sliderPromoBtn">Ознакомиться с полным каталогом</button>
            </Link>
          </div>

        </Container>
      </div>
    </>
  );
}