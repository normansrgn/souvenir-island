import React from "react";
import { Container } from "react-bootstrap";
import { FaGift, FaLeaf, FaTruck, FaHandHoldingHeart, FaPalette } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whyus.scss";

export default function WhyUs() {
  return (
    <div className="whyus">

        <h2 className="whyus__title">Почему выбирают нас?</h2>
        <div className="whyus__items">
          <div className="whyus__item">
            <FaPalette className="whyus__icon" />
            <h3>Уникальные изделия</h3>
            <p>Каждое изделие создаётся вручную, что делает его по-настоящему особенным.</p>
          </div>
          <div className="whyus__item">
            <FaLeaf className="whyus__icon" />
            <h3>Экологичные материалы</h3>
            <p>Мы используем только натуральные и безопасные материалы.</p>
          </div>
          <div className="whyus__item">
            <FaHandHoldingHeart className="whyus__icon" />
            <h3>Персонализация</h3>
            <p>Добавим имя, надпись или изменим дизайн по вашему желанию.</p>
          </div>
          <div className="whyus__item">
            <FaTruck className="whyus__icon" />
            <h3>Быстрая доставка</h3>
            <p>Бережно упакуем и отправим ваш заказ в кратчайшие сроки.</p>
          </div>
          <div className="whyus__item">
            <FaGift className="whyus__icon" />
            <h3>Идеальный подарок</h3>
            <p>Наши изделия — это не просто вещи, а частичка души и эмоций.</p>
          </div>
        </div>

    </div>
  );
}