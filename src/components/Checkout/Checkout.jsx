import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
            <Container>
                <h1 className="checkout__title">Оформление заказа</h1>
                {cartItems.length > 0 ? (
                    <div>
                        <ul className="checkout__list">
                            {cartItems.map((item, index) => (
                                <li key={index} className="checkout__item">
                                    {item.name} (x{item.quantity || 1}) - {item.price * (item.quantity || 1)} ₽
                                </li>
                            ))}
                        </ul>
                        <h3>Итого: {cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)} ₽</h3>

                        <Form onSubmit={handleSubmit} className="checkout__form">
                            <Form.Group>
                                <Form.Label>Имя</Form.Label>
                                <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Адрес</Form.Label>
                                <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} required />
                            </Form.Group>

                            <Button type="submit" className="checkout__btn">Оформить заказ</Button>
                        </Form>
                    </div>
                ) : (
                    <p>Корзина пуста</p>
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
