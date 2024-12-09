import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig"; // Импорт конфигурации Firebase
import { useNavigate } from "react-router-dom"; // Импорт useNavigate
import { onAuthStateChanged, signOut } from "firebase/auth"; // Импорт функции выхода из аккаунта

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Проверка аутентифицированного пользователя
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPhone(currentUser.phoneNumber || "Не указан");
      } else {
        navigate("/log"); // Перенаправление на страницу входа, если пользователь не аутентифицирован
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Пользователь вышел из аккаунта");
      navigate("/log"); // Перенаправление на страницу входа после выхода
    } catch (error) {
      console.error("Ошибка выхода:", error.message);
    }
  };

  return (
    <section className="user-profile">
      <h1>Профиль пользователя</h1>
      {user ? (
        <div className="user-profile__info">
          <p>Имя: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} className="logout-btn">
            Выйти
          </button>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </section>
  );
}