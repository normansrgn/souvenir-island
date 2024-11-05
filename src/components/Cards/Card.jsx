import React from "react";
import "./Cards.scss";

export default function Card({ name, price, image }) {
    return (
        <section className="card">
            <img src={image} alt={name} className="card__img" />
            <div className="card__textBlock">
                <h1>{name}</h1>
                <div className="card__textP">
                    <div className="card__price">{price} ₽</div>
                    <div className="card__buyBtn">Купить</div>
                </div>
            </div>
        </section>
    );
}