import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./checkout.scss";
import "../../pages/basket.scss"

export default function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.address) {
            alert("Заполните все поля!");
            return;
        }

        const orderDetails = cartItems
            .map((item) => `${item.name} (x${item.quantity}): ${item.price * item.quantity} ₽`)
            .join("\n");

        const templateParams = {
            user_name: formData.name,
            user_phone: formData.phone,
            user_address: formData.address,
            order_details: orderDetails,
            total_price: cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) + " ₽",
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(() => {
                setShowModal(true);
                localStorage.removeItem("cart");
                setCartItems([]);
                setFormData({ name: "", phone: "", address: "" });
                setTimeout(() => {
                    setShowModal(false);
                    navigate("/");
                }, 3000);
            })
            .catch((error) => {
                console.error("Ошибка отправки заказа:", error);
            });
    };

    return (
        <section className="checkout">
            <Container className="checkout__container">
                <h1 className="checkout__title">Оформление заказа</h1>
                {cartItems.length > 0 ? (
                    <div className="checkout__insidecont">
                        <div className="checkout__formTitle">Личные данные</div>
                        <div className="checkout__cont">
                            <div className="checkout__datas">
                                <Form onSubmit={handleSubmit} className="checkout__form">
                                    <div className="checkout__personalDate">
                                        <Form.Group>
                                            <Form.Control type="text" name="name" placeholder="Имя и Фамилия" value={formData.name} onChange={handleInputChange} required />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="tel" name="phone" placeholder="Номер телефона" value={formData.phone} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </div>
                                    <div className="checkout__delivery">
                                        <div className="checkout__formTitle">Доставка</div>

                                        <Form.Group>
                                            <Form.Control type="text" name="address" placeholder="Адрес доставки" value={formData.address} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>

                            <div className="checkout__tovars">
                                <ul className="checkout__list">
                                    {cartItems.map((item, index) => (
                                        <li key={index} className="checkout__item">
                                            {/* Разделяем разметку товара на картинку и текстовые данные */}
                                            <div className="checkout__itemImageContainer">
                                                <img src={item.image} alt={item.name} className="checkout__itemImage" />
                                                <div className="checkout__text">
                                                    <div className="checkout__titleblock">
                                                        <div className="checkout__itemName">{item.name}</div>

                                                        <div className="checkout__itemQuantity">Количество: {item.quantity || 1}</div>
                                                    </div>
                                                    <div className="checkout__itemDetails">

                                                    </div>
                                                    <div className="checkout__itemPrice">{item.price * (item.quantity || 1)} ₽</div>
                                                </div>

                                            </div>


                                        </li>
                                    ))}
                                </ul>

                                <div className="checkout__totalPrice">Итого: {cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)} ₽</div>
                                <button onClick={handleSubmit} className="checkout__butn">
                                    Оформить заказ
                                </button>

                            </div>
                        </div>
                    </div>
                ) : (
                    <Container className="pustbasket">
                        <div className="pustbasket__title">Ваша корзина пуста</div>
                        <Link to="/">
                            <button>Перейти к покупкам</button>
                        </Link>
                    </Container>
                )}
            </Container>

            {/* Модальное окно подтверждения */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">
                    <h4>Заказ успешно оформлен!</h4>
                    <p>Вы будете перенаправлены на главную страницу...</p>
                </Modal.Body>
            </Modal>
        </section>
    );
}