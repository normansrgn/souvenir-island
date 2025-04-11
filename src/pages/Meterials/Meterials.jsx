import React from "react";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Meterials.scss";

import dub from "./matImg/dub.jpg"
import yasen from "./matImg/yasen.png"
import klen from "./matImg/klen.png"
import buk from "./matImg/buk.png"
import sosna from "./matImg/sosna.png"


export default function Meterials() {
    return (
        <>
            <div className="materials">
                <Container className="materials__cont">
                    <div className="materials__text">
                        В нашем магазине «Сувенирный островок» мы с гордостью используем только лучшие породы дерева для создания уникальных изделий ручной работы. Мы специализируемся на пяти видах древесины, каждый из которых обладает своими характерными особенностями. Наши мастера тщательно отбирают сырье, чтобы обеспечить высокое качество и долговечность каждого сувенира. Погрузитесь в мир натурального дерева и узнайте больше о каждом из насущных материалов, которые делают нашу продукцию поистине особенной!

                        <div className="materials__cc">
                            <div className="materials__img">

                            </div>
                            <br /> <br /> <br />
                            <div className="material__second">
                                <div className="materials__im">
                                    1. Дуб:
                                    - Дуб — это плотная и прочная древесина, известная своей долговечностью. Идеален для производства мебели и предметов интерьера, а также для изготовления сувениров с сложной резьбой.

                                    <br /> <br />

                                    <img src={dub} alt="" />
                                </div>

                                <br />
                                <br />
                                <div className="materials__im">
                                    <img src={yasen} alt="" />
                                    2. Ясень:
                                    - Ясень отличается легкостью в обработке и красивой текстурой. Его часто используют для создания спортивного инвентаря и декоративных изделий. Ясень имеет хорошую прочность и стойкость к износу.
                                    <br /> <br />
                                </div>
                                <br />
                                <br />
                                <div className="materials__im">
                                    3. Клен:
                                    - Клен — это светлая и упругая древесина, часто используемая для изготовления деревянной утвари, игрушек и музыкальных инструментов. Он также имеет приятный естественный блеск и легко поддается полировке.
                                    <br /> <br />
                                    <img src={klen} alt="" />
                                </div>
                                <br />
                                <br />
                                <div className="materials__im">
                                    <img src={buk} alt="" />
                                    4. Бук:
                                    - Бук — это плотное дерево с мелкозернистой текстурой, которое легко обрабатывается и окрашивается. Он прекрасно подходит для изготовления мебели, кухонной утвари и декоративных элементов.
                                    <br /> <br />
                                </div>
                                <br />
                                <br />
                                <div className="materials__im">
                                    5. Сосна:
                                    - Сосна — легкое и доступное дерево, широко используемое для создания различной мебели и мелких предметов. Ее мягкая текстура и светлый цвет делают сосну отличным выбором для создания уютных и стильно оформленных сувениров.
                                    <img src={sosna} alt="" />
                                    <br /> <br />
                                </div>
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}