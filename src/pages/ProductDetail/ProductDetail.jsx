import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../../components/Cards/data"; // Путь к данным о товарах

export default function ProductDetail() {
  const { id } = useParams(); // Получаем id товара из URL
  const productId = parseInt(id); // Приводим id к числу

  // Логирование для отладки
  console.log('Product ID from URL:', productId);
  
  const product = productsData.find((prod) => prod.id === productId); // Находим товар по id

  if (!product) {
    console.log('Товар не найден');
    return <div>Товар не найден.</div>; // Если товар не найден
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <div className="product-detail__price">{product.price} ₽</div>
      <div className="product-detail__category">{product.category}</div>
    </div>
  );
}