import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { auth } from "../../firebaseConfig"; // Путь к конфигурации Firebase
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
    <>
      <Container>
        <div className="header">
          <Link to="/">
            <div className="header__logo">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.20837 20.5H4.16671V36.8333C4.16671 37.9163 4.59691 38.9549 5.36269 39.7207C6.12846 40.4864 7.16707 40.9166 8.25004 40.9166H18.4584V20.5H6.20837ZM32.75 20.5H22.5417V40.9166H32.75C33.833 40.9166 34.8716 40.4864 35.6374 39.7207C36.4032 38.9549 36.8334 37.9163 36.8334 36.8333V20.5H32.75ZM34.365 10.2916C34.6644 9.29895 34.8084 8.26588 34.7917 7.22915C34.7917 3.28873 31.5863 0.083313 27.6459 0.083313C24.3343 0.083313 22.1232 3.10906 20.696 6.38185C19.2893 3.28873 16.9659 0.083313 13.3542 0.083313C9.41379 0.083313 6.20837 3.28873 6.20837 7.22915C6.20837 8.44598 6.36967 9.45252 6.63508 10.2916H0.083374V18.4583H18.4584V14.375H22.5417V18.4583H40.9167V10.2916H34.365ZM10.2917 7.22915C10.2917 5.54069 11.6657 4.16665 13.3542 4.16665C15.1672 4.16665 16.8536 7.28019 17.8418 10.2916H12.3334C11.5698 10.2916 10.2917 10.2916 10.2917 7.22915ZM27.6459 4.16665C29.3343 4.16665 30.7084 5.54069 30.7084 7.22915C30.7084 10.2916 29.4303 10.2916 28.6667 10.2916H23.6095C24.6507 7.07398 26.1636 4.16665 27.6459 4.16665Z"
                  fill="#7A876C"
                />
              </svg>
              <h1>
                Сувенирная <br />
                лавка
              </h1>
            </div>
          </Link>

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
          <BurgerMenu />
        </div>
      </Container>
    </>
  );
}
