import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Путь к файлу конфигурации
import { useNavigate } from "react-router-dom";
import "./reglog.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Reg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Создание пользователя
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Обновление профиля пользователя (имя)
      await updateProfile(user, { displayName: name });

      console.log("Пользователь создан:", user);

      // Перенаправление на главную страницу
      navigate("/");

      // Очистка формы и ошибок
      setName("");
      setEmail("");
      setPassword("");
      setError("");
    } catch (err) {
      console.error("Ошибка регистрации:", err.message);
      setError(err.message);
    }
  };

  return (
    <section className="reg">
      <Container className="reg__container">
        <h1 className="reg__title">Регистрация</h1>
        <form onSubmit={handleRegister} className="reg__form">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit" className="reg__btn">Зарегистрироваться</button>
          <div className="reg__underButton">
            или{" "}
            <Link to="/log">
              <span>войти</span>
            </Link>{" "}
            если есть аккаунт
          </div>
        </form>
        {error && <p className="reg__error">{error}</p>}
      </Container>
    </section>
  );
}