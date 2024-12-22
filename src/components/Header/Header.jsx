import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Пользователь вышел из аккаунта");
    } catch (error) {
      console.error("Ошибка выхода:", error.message);
    }
  };

  return (
    <Container>
      <div className="header">
        {/* Логотип */}
        <Link to="/">
          <div className="header__logo">
            {/* SVG код логотипа */}
            <h1>
              Cувенирный <br />
              островок
            </h1>
          </div>
        </Link>

        {/* Основное меню */}
        <div className="header__linkList">
          <ol>
            <Link to={"/"}>
              <li>Главная</li>
            </Link>
            <Link to="/cart">
              <li>Каталог</li>
            </Link>
            <Link to={"/about"}>
              <li>О нас</li>
            </Link>
          </ol>
        </div>

        {/* Профиль и корзина */}
        <div className="header__links">
          <Link to="/cart">
            <div className="header__basketIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="rgba(122,135,108,1)"
              >
                <path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"></path>
              </svg>
            </div>
          </Link>
          {user ? (
            <Link to={`/user/${user.uid}`}>
              <div className="header__profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,254,254,1)"
                >
                  {/* Gradient для иконки */}
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{
                          stopColor: "rgb(6, 193, 252)",
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="33%"
                        style={{
                          stopColor: "rgb(172, 66, 255)",
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="57%"
                        style={{
                          stopColor: "rgb(255, 0, 214)",
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="90%"
                        style={{
                          stopColor: "rgb(255, 0, 61)",
                          stopOpacity: 1,
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
                    fill="#7a876c"
                  ></path>
                </svg>
              </div>
            </Link>
          ) : (
            <Link to="/reg">
              <div className="header__regbtn">Регистрация</div>
            </Link>
          )}
        </div>

        {/* Бургер меню */}
        <BurgerMenu user={user} onLogout={handleLogout} />
      </div>
    </Container>
  );
}
