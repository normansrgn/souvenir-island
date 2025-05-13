import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button, Modal, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingBag, FaMapMarkerAlt, FaPhone, FaUser, FaCheckCircle } from "react-icons/fa";
import "./checkout.scss";

export default function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        deliveryMethod: "delivery",
        email: ""
    });
    const [phoneError, setPhoneError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    const formatPhoneNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, '');
        if (cleanedValue.length > 11) return value.substring(0, 19);

        let formattedValue = cleanedValue;
        if (cleanedValue.length > 1) {
            formattedValue = `+7 (${cleanedValue.substring(1, 4)}) ${cleanedValue.substring(4, 7)}-${cleanedValue.substring(7, 9)}-${cleanedValue.substring(9)}`;
        }
        return formattedValue;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const formattedValue = formatPhoneNumber(value);
            setFormData({ ...formData, [name]: formattedValue });

            const phoneDigits = formattedValue.replace(/\D/g, '');
            setPhoneError(phoneDigits.length < 11 ? "Номер должен содержать 11 цифр" : "");
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (phoneDigits.length !== 11) {
            setPhoneError("Введите корректный номер телефона (11 цифр)");
            return false;
        }

        if (!formData.name.trim()) {
            setSubmitError("Пожалуйста, укажите ваше имя");
            return false;
        }

        if (formData.deliveryMethod === "delivery" && !formData.address.trim()) {
            setSubmitError("Пожалуйста, укажите адрес доставки");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError("");

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const orderDetails = cartItems
                .map((item) => `${item.name} (x${item.quantity}): ${item.price * item.quantity} ₽`)
                .join("\n");

            const templateParams = {
                user_name: formData.name,
                user_phone: formData.phone,
                user_email: formData.email,
                user_address: formData.deliveryMethod === "delivery" ? formData.address : "Самовывоз",
                delivery_method: formData.deliveryMethod === "delivery" ? "Доставка" : "Самовывоз",
                order_details: orderDetails,
                total_price: cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) + " ₽",
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_USER_ID
            );

            // Очистка корзины и формы
            localStorage.removeItem("cart");
            setCartItems([]);
            setFormData({ name: "", phone: "", address: "", deliveryMethod: "delivery", email: "" });

            // Показать модальное окно успеха
            setShowModal(true);

            // Перенаправление через 3 секунды
            setTimeout(() => {
                setShowModal(false);
                navigate("/");
            }, 3000);
        } catch (error) {
            console.error("Ошибка отправки заказа:", error);
            setSubmitError("Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

    return (
        <section className="checkout-section">
            <Container className="checkout-container">
                <h1 className="checkout-title">
                    <FaShoppingBag className="me-2" />
                    Оформление заказа
                </h1>

                {cartItems.length > 0 ? (
                    <div className="checkout-content">
                        <div className="checkout-form-container">
                            <h2 className="section-title">
                                <FaUser className="me-2" />
                                Личные данные
                            </h2>

                            {submitError && <Alert variant="danger">{submitError}</Alert>}

                            <Form onSubmit={handleSubmit} className="checkout-form">
                                <Form.Group className="mb-4">
                                    <Form.Label>Имя и Фамилия*</Form.Label>
                                    <div className="input-with-icon">
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Иван Иванов"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <FaUser className="input-icon" />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Телефон*</Form.Label>
                                    <div className="input-with-icon">
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            placeholder="+7 (___) ___-__-__"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <FaPhone className="input-icon" />
                                    </div>
                                    {phoneError && <div className="error-message">{phoneError}</div>}
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Email (необязательно)</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="example@mail.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>

                                <h2 className="section-title mt-5">
                                    <FaMapMarkerAlt className="me-2" />
                                    Способ получения
                                </h2>

                                <div className="delivery-options">
                                    <Form.Check
                                        type="radio"
                                        id="delivery"
                                        label="Доставка"
                                        name="deliveryMethod"
                                        value="delivery"
                                        checked={formData.deliveryMethod === "delivery"}
                                        onChange={handleInputChange}
                                        className="delivery-option"
                                    />

                                    <Form.Check
                                        type="radio"
                                        id="selfPickup"
                                        label="Самовывоз"
                                        name="deliveryMethod"
                                        value="selfPickup"
                                        checked={formData.deliveryMethod === "selfPickup"}
                                        onChange={handleInputChange}
                                        className="delivery-option"
                                    />
                                </div>

                                {formData.deliveryMethod === "selfPickup" ? (
                                    <div className="pickup-info">
                                        <p><strong>Адрес самовывоза:</strong> ул. Пролетарская 209, ст. Брюховецкая Краснодар</p>
                                        <p><strong>Часы работы:</strong> Пн-пт: 9:00-18:00
                                            Сб-вс: 9:00-16:00</p>
                                    </div>
                                ) : (
                                    <Form.Group className="mb-4 mt-3">
                                        <Form.Label>Адрес доставки*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            placeholder="Город, улица, дом, квартира"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required={formData.deliveryMethod === "delivery"}
                                        />
                                    </Form.Group>
                                )}
                            </Form>
                        </div>

                        <div className="order-summary">
                            <h2 className="section-title">Ваш заказ</h2>

                            <div className="order-items">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="order-item">
                                        <img src={item.image} alt={item.name} className="item-image" />
                                        <div className="item-details">
                                            <h4 className="item-name">{item.name}</h4>
                                            <div className="item-meta">
                                                <span className="item-quantity">Кол-во: {item.quantity || 1}</span>
                                                <span className="item-price">{item.price * (item.quantity || 1)} ₽</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="order-total">
                                <div className="total-row">
                                    <span>Итого:</span>
                                    <span className="total-price">{totalPrice} ₽</span>
                                </div>

                                {formData.deliveryMethod === "delivery" && (
                                    <div className="total-row">
                                        <span>Доставка:</span>
                                        <span className="delivery-price">Бесплатно</span>
                                    </div>
                                )}

                                <div className="total-row grand-total">
                                    <span>К оплате:</span>
                                    <span>{totalPrice} ₽</span>
                                </div>
                            </div>

                            <Button
                                onClick={handleSubmit}
                                className="submit-button"
                                disabled={phoneError || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                        <span className="ms-2">Оформляем...</span>
                                    </>
                                ) : (
                                    "Подтвердить заказ"
                                )}
                            </Button>

                            <p className="security-note">
                                Ваши данные защищены и не будут переданы третьим лицам
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">
                            <FaShoppingBag />
                        </div>
                        <h3>Ваша корзина пуста</h3>
                        <p>Выберите товары в нашем магазине</p>
                        <Link to="/" className="continue-shopping">
                            <Button variant="primary">Вернуться к покупкам</Button>
                        </Link>
                    </div>
                )}
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center p-5">
                    <div className="success-icon">
                        <FaCheckCircle />
                    </div>
                    <h4 className="mt-3">Заказ успешно оформлен!</h4>
                    <p className="text-muted">Мы свяжемся с вами в ближайшее время для подтверждения</p>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    );
}