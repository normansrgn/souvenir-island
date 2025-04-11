import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "./Cards.scss";

export default function Card({ id, name, price, image, category }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    const discountedPrice = isAuthenticated ? (price * 0.95).toFixed(2) : price;

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
        <section className="card col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 ">
            <div className="card__category">{category}</div>
            <Link to={`/product/${id}`}>
                <img src={image} alt={name} className="card__img" />
            </Link>
            <div className="card__textBlock">
                <h1>{name}</h1>
                <div className="card__textP">
                    <div className="card__price">
                        {isAuthenticated ? (
                            <>
                                <span className="discounted-price">{discountedPrice} ₽</span>
                                <span className="original-price" style={{ textDecoration: "line-through", color: "gray" }}>
                                    {price} ₽
                                </span>
                            </>
                        ) : (
                            <>{price} ₽</>
                        )}
                    </div>
                    <div className="card__buyBtn" onClick={handleBuy}>Купить</div>
                </div>
            </div>
          
        </section>
    );
}