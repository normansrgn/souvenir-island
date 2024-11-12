import React, { useState } from "react";
import "./search.scss";

export default function Search({ onSearch, onCategorySelect }) {
    const [searchText, setSearchText] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        onSearch(value); // Вызываем функцию поиска при каждом изменении ввода
    };

    const handleCategoryClick = (category) => {
        if (activeCategory === category) {
            setActiveCategory(""); // Сбрасываем активную категорию, если нажата повторно
            onCategorySelect(""); // Сбрасываем фильтр
        } else {
            setActiveCategory(category);
            onCategorySelect(category); // Фильтруем по выбранной категории
        }
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
                <div
                    className={`search__btn ${activeCategory === "Брелки" ? "active" : ""}`}
                    onClick={() => handleCategoryClick("Брелки")}
                >
                    Брелки
                </div>
                <div
                    className={`search__btn ${activeCategory === "Подставки" ? "active" : ""}`}
                    onClick={() => handleCategoryClick("Подставки")}
                >
                    Подставки
                </div>
                <div
                    className={`search__btn ${activeCategory === "Тарелки" ? "active" : ""}`}
                    onClick={() => handleCategoryClick("Тарелки")}
                >
                    Тарелки
                </div>
                <div
                    className={`search__btn ${activeCategory === "Украшения" ? "active" : ""}`}
                    onClick={() => handleCategoryClick("Украшения")}
                >
                    Украшения
                </div>
            </div>
        </section>
    );
}