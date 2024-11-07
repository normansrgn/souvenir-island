// Search.js
import React, { useState } from "react";
import "./search.scss";

export default function Search({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        onSearch(value); // Вызываем функцию поиска при каждом изменении ввода
    };

    return (
        <section className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Поиск товара..."
                value={searchText}
                onChange={handleInputChange}
            />
            <div className="search__btns">
                <div className="search__btn">Брелки</div>
                <div className="search__btn">Подставки</div>
                <div className="search__btn">Тарелки</div>
                <div className="search__btn">Украшения</div>
            </div>
        </section>
    );
}