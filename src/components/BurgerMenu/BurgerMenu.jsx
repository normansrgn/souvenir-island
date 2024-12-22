import React, { useState } from "react";
import "./__burgermenu.scss";
import { Link } from "react-router-dom";

const BurgerMenu = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const closeMenuOnOutsideClick = (e) => {
    if (e.target.classList.contains("blur-background")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="burger_menu">
      <button id="burger__btn" type="button" onClick={toggleMenu}>
        <span
          id="burgerSpan"
          className={isOpen ? "btn-open-animation" : ""}
        ></span>
      </button>

      {/* Бургер-меню */}
      <aside className={`burger__container ${isOpen ? "open" : ""}`}>
        <div className="burger__content">
          <nav className="burger__nav">
            <ol className="burgerMenu_list">
              <Link to="/" onClick={handleLinkClick}>
                <li>Главная</li>
              </Link>
              <Link to="/aboutus" onClick={handleLinkClick}>
                <li>О нас</li>
              </Link>
              {/* Регистрация или профиль */}
              {user ? (
                <Link to={`/user/${user.uid}`} onClick={handleLinkClick}>
                  <li>Профиль</li>
                </Link>
              ) : (
                <Link to="/reg" onClick={handleLinkClick}>
                  <li>Регистрация</li>
                </Link>
              )}
              {/* Кнопка выхода для авторизованного пользователя */}
              {user && (
                <li onClick={onLogout} className="burgerMenu__logout">
                  Выйти
                </li>
              )}
            </ol>
          </nav>
        </div>
      </aside>

      {/* Размытый фон */}
      <div
        className={`blur-background ${isOpen ? "show" : ""}`}
        onClick={closeMenuOnOutsideClick}
      ></div>
    </div>
  );
};

export default BurgerMenu;
