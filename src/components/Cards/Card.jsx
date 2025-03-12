import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link для переадресации
import "./Cards.scss";

export default function Card({ id, name, price, image, category }) {
    const handleBuy = () => {
        const product = { name, price, image, category };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} добавлен в корзину`);
    };

    return (
        <section className="card col-xxl-4 col-sm-6 col-md-9">
            <Link to={`/product/${id}`}>

                <div className="card__category">{category}</div>
                <img src={image} alt={name} className="card__img" />
                <div className="card__textBlock">
                    <h1>{name}</h1>
                    <div className="card__textP">
                        <div className="card__price">{price} ₽</div>
                        <div className="card__buyBtn" onClick={handleBuy}>Купить</div>
                    </div>
                </div>
            </Link>

        </section>
    );
}