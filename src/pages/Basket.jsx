import React, { useEffect, useState } from "react";
import "./basket.scss";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Basket() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (idToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== idToRemove);
    updateCart(updatedCart);
  };

  const changeQuantity = (id, delta) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    updateCart(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="basket">
      <Container>
        <h1 className="basket__title">Ваша корзина</h1>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <div className="basket__card" key={item.id}>
                <div className="basket__cardCont">
                  <img src={item.image} alt={item.name} className="basket__img" />
                  <div className="basket__cardText">
                    <div className="basket__cardTitle">{item.name}</div>
                    <div className="basket__price">{item.price * item.quantity} ₽</div>
                    <div className="basket__quantity">
                      <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)}>X</button>
              </div>
            ))}
            <div className="basket__total">
              <h2>Итого: {totalPrice} ₽</h2>
            </div>
            <button className="basket__btn" onClick={() => window.location.href = "/checkout"}>Оформить заказ</button>
          </ul>
        ) : (
          <p>Корзина пуста</p>
        )}
      </Container>
    </section>
  );
}
