// src/components/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./reglog.scss";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Пользователь вошел в систему:", userCredential.user);

      navigate("/");

      setEmail("");
      setPassword("");
      setError("");
    } catch (err) {
      console.error("Ошибка входа:", err.message);
      setError(err.message);
    }
  };

  return (
    <section className="reg">
      <Container className="reg__container">
        <h1 className="reg__title">Вход в аккаунт</h1>
        <form onSubmit={handleLogin} className="reg__form">
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
          <button className="reg__btn" type="submit">Войти</button>
          <div className="reg__underButton">
            или{" "}
            <Link to="/reg">
              <span>зарегистрироваться</span>
            </Link>{" "}
            если нет аккаунта
          </div>
        </form>
        {error && <p className="reg__error">{error}</p>}
      </Container>
    </section>
  );
}
