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

  const removeItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <section className="basket">
        <Container>
          <h1 className="basket__title">Ваша корзина</h1>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <div className="basket__card" key={index}>
                  <div className="basket__cardCont">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="basket__img"
                    />
                    <div className="basket__cardText">
                      <div className="basket__cardTitle">{item.name}</div>
                      <div className="basket__price">{item.price} ₽</div>
                    </div>
                  </div>
                  <button onClick={() => removeItem(index)}>X</button>
                </div>
              ))}
              <button className="basket__btn">Оформить заказ</button>
            </ul>
          ) : (
            <p>Корзина пуста</p>
          )}
        </Container>
      </section>
    </>
  );
}
