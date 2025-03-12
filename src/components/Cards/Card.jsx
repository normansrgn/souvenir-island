import React from "react";
import { Link } from "react-router-dom";
import "./Cards.scss";

export default function Card({ id, name, price, image, category }) {
    const handleBuy = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = cart.findIndex(item => item.id === id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ id, name, price, image, category, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} добавлен в корзину`);
    };

    return (
        <section className="card col-xxl-4 col-sm-6 col-md-9">
            <div className="card__category">{category}</div>
            <Link to={`/product/${id}`}>
                <img src={image} alt={name} className="card__img" />
            </Link>
            <div className="card__textBlock">
                <h1>{name}</h1>
                <div className="card__textP">
                    <div className="card__price">{price} ₽</div>
                    <div className="card__buyBtn" onClick={handleBuy}>Купить</div>
                </div>
            </div>
        </section>
    );
}