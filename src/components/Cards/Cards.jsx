// App.js
import React, { useState } from "react";
import Card from "./Card";
import productsData from "./data"; // Импорт данных из файла data.js
import Search from "../search/Search";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.scss";

export default function App() {
  const [searchText, setSearchText] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Container>
        <Search onSearch={setSearchText} />
        <Row className="product_list">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}