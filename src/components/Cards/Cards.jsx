import React, { useState } from "react";
import Card from "./Card";
import productsData from "./data";
import Search from "../search/Search";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.scss";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Container>
        <Search onSearch={setSearchText} onCategorySelect={setSelectedCategory} />
        <Row className="product_list">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id} // Добавил id
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              description={product.description}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}