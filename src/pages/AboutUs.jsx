import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import "./about.scss";

export default function AboutUs() {
  return (
    <>
      <Container>
        <section className="about">
          <div className="about__title">
            <h1>О нас</h1>
          </div>

          <div className="about__text">
            <p>
              Добро пожаловать в сувенирный островок, где каждый предмет является
              уникальным шедевром ручной работы. Мы предлагаем широкий выбор
              разнообразных сувениров, сделанных с любовью и мастерством наших
              талантливых ремесленников.
            </p>

            <p>
              В нашем ассортименте вы найдете преимущественно деревянные
              изделия, каждое из которых поражает красотой и оригинальностью
              исполнения. Мы уделяем особое внимание качеству материалов и
              деталям, чтобы каждый сувенир стал не просто предметом, а
              настоящим произведением искусства.
            </p>

            <p>
              Мы гордимся тем, что поддерживаем мастеров-ремесленников и
              поощряем традиции ручной работы. Приобретая сувениры у нас, вы не
              только приобретаете уникальный предмет, но и поддерживаете
              искусство и ремесленников.
            </p>

            <p>
              Добро пожаловать в сувенирный островок, где каждый предмет
              обладает историей и душой, и каждая покупка становится маленьким
              вкладом в сохранение уникальных ремесел.
            </p>
          </div>

          <section className="about__contacts">
            <div className="about__contactsTitle">Найди нас на карте</div>
            <iframe
              className="about__contactsMap"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa35d09934e9a8b333767ae1bc083654665d8e26456c891a4b61c4c1660d21e8f&amp;source=constructor"
              width="100%"
              height="296"
              frameborder="0"
            ></iframe>

            <div className="about__contactsUs">
              <div className="about__contactsUsTitle">Наши контакты</div>
              <div className="about__contactsUsText">
                <p>Телефон: +79898221412</p>
                <p>
                  Мы в телеграмме: <a className="url" href="https://t.me/vceuzdereva2022 "> https://t.me/vceuzdereva2022 </a>
                </p>
                <p>                                        Краснодарский край, Брюховецкий район, ст. Брюховецкая, ул. Пролетарская, д. 209
                </p>
              </div>
            </div>
          </section>
        </section>
      </Container>
    </>
  );
}
