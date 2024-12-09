// src/components/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./reglog.scss";
import { Container } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Аутентификация пользователя с помощью электронной почты и пароля
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Пользователь вошел в систему:", userCredential.user);

      // Перенаправление пользователя на страницу профиля после успешного входа
      navigate(`/user/${userCredential.user.uid}`);

      // Очистка формы и ошибок
      setEmail("");
      setPassword("");
      setError("");
    } catch (err) {
      console.error("Ошибка входа:", err.message);
      setError(err.message);
    }
  };

  return (
    <section className="login">
      <Container className="login__container">
        <h1 className="login__title">Вход в аккаунт</h1>
        <form onSubmit={handleLogin} className="login__form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Войти</button>
        </form>
        {error && <p className="login__error">{error}</p>}
      </Container>
    </section>
  );
}
