import React from "react";

import "./Catalog.scss";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "../../components/Cards/Cards";

export default function Catalog() {
    return (
        <>
            <div className="catalog">
                <Container className="catalog__container">
                    <div className="catalog__title">Каталог товаров</div>

                </Container>
                <Cards />
            </div>
        </>
    )
}