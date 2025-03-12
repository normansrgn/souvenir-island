import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../components/Cards/data";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ProductDetail.scss";

export default function ProductDetail() {
    const { id } = useParams(); // Получаем id товара из URL
    const productId = parseInt(id); // Приводим id к числу

    // Логирование для отладки
    console.log('Product ID from URL:', productId);

    const product = productsData.find((prod) => prod.id === productId); // Находим товар по id

    if (!product) {
        console.log('Товар не найден');
        return <div>Товар не найден.</div>;
    }

    // Обработчик для добавления товара в корзину
    const handleBuy = () => {
        const { name, price, image, category } = product;
        const productToAdd = { name, price, image, category };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(productToAdd);
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
                    <div className="productDetail__price">{product.price} ₽</div>
                    <button onClick={handleBuy}>Добавить в корзину</button>

                    <div className="productDetail__desc">
                        <div className="productDetail__disctitle">О товаре</div>
                        <div className="productDetail__disc">{product.description}</div>
                    </div>
                </div>
            </Container>
        </div>
    );
}