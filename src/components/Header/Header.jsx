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

  // Ссылка на секцию с карточками товаров
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog-section'); // Убедитесь, что вы используете тот же ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="46" height="46" fill="rgba(122,135,108,1)"><path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path></svg>
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
            <Link to="catalog" onClick={scrollToCatalog}>
              <li>Каталог</li>
            </Link>
            <Link to={"/about"}>
              <li>О нас</li>
            </Link>
            <Link to={"/materials"}>
              <li>Материалы</li>
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
              <div className="header__regbtn">
                Войти
              </div>
            </Link>
          )}
        </div>

        {/* Бургер меню */}
        <BurgerMenu user={user} onLogout={handleLogout} />
      </div>
    </Container>
  );
}