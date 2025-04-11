import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { Container } from "react-bootstrap";

import "./useprofile.scss";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPhone(currentUser.phoneNumber || "Не указан");
      } else {
        navigate("/log");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Пользователь вышел из аккаунта");
      navigate("/log");
    } catch (error) {
      console.error("Ошибка выхода:", error.message);
    }
  };

  return (
    <section className="userProfile">
      <Container>
        <h1 className="basket__title">Профиль</h1>
        {user ? (
          <div className="userProfile__card">
            <div className="userProfile__avatar">
              {user.displayName?.charAt(0).toUpperCase() || "👤"}
            </div>
            <div className="userProfile__info">
              <div className="userProfile__infoItem">
                <span>👤</span>
                <p>{user.displayName}</p>
              </div>
              <div className="userProfile__infoItem">
                <span>📧</span>
                <p>{user.email}</p>
              </div>
              {/* <div className="userProfile__infoItem">
                <span>📱</span>
                <p>{phone}</p>
              </div> */}
              <button onClick={handleLogout} className="userProfile__logout">
                Выйти из аккаунта
              </button>
            </div>
          </div>
        ) : (
          <p>Загрузка...</p>
        )}
      </Container>
    </section>
  );
}