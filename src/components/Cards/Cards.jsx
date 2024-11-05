import React from "react";
import Card from "./Card";
import products from "./data"; // Импорт данных из файла data.js
import "./Cards.scss";

import { Row } from "react-bootstrap";

export default function App() {
    return (
        <Row className="product_list">
            {products.map((product) => (
                <Card
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </Row>
    );
}