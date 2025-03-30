import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../components/Cards/data";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ProductDetail.scss";

export default function ProductDetail() {
    const { id } = useParams(); // Получаем id товара из URL
    const productId = parseInt(id); // Приводим id к числу

    // Логирование для отладки
    console.log('Product ID from URL:', productId);

    const product = productsData.find((prod) => prod.id === productId); // Находим товар по id

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    if (!product) {
        console.log('Товар не найден');
        return <div>Товар не найден.</div>;
    }

    const discountedPrice = isAuthenticated ? (product.price * 0.95).toFixed(2) : product.price;

    // Обработчик для добавления товара в корзину
    const handleBuy = () => {
        const { id, name, price, image, category } = product;
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
        <div className="productDetail">
            <Container className="productDetail__container">
                <div className="productDetail__img">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productDetail__text">
                    <h1 className="productDetail__Title">{product.name}</h1>
                    <div className="productDetail__price">
                        {isAuthenticated ? (
                            <>
                                <span className="discounted-price">{discountedPrice} ₽</span>
                                <span className="original-price" style={{ textDecoration: "line-through", color: "gray" }}>
                                    {product.price} ₽
                                </span>
                            </>
                        ) : (
                            <>{product.price} ₽</>
                        )}
                    </div>
                    <button onClick={handleBuy}>Добавить в корзину</button>

                    <div className="productDetail__desc">
                        <div className="productDetail__disctitle">О товаре</div>
                        <div className="productDetail__disc">{product.description}</div>
                    </div>
                </div>
            </Container>
            { !isAuthenticated && (
                <div className="discount-notification">
                    Авторизуйтесь, чтобы получить скидку 5% на все товары!
                </div>
            )}
        </div>
    );
}