// import { useLocation, Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Tour.css";
import TouristsField from "../TouristsField/TouristsField";
import DateField from "../DateField/DateField";
import DefaultField from "../DefaultField/DefaultField";
import DefaultCheckbox from "../DefaultCheckbox/DefaultCheckbox";
import BigField from "../BigField/BigField";
import Header from "../Header/Header";
import Button from "../Button/Button";

import pb from "../../images/pb.svg";
import shortcutButtons from "../../images/shortcut-buttons-pic.svg";
import tagLengthIcon from "../../images/tour-tag-length-icon.svg";
import planArrowIcon from "../../images/tour-plan-arrow-icon.svg";
import photoBlog from "../../images/photo-blog.svg";
import aboutPic from "../../images/tour-about-pic.svg";
import faqPic from "../../images/tour-faq-pic.svg";
import smallInfo from "../../images/tour-small-info.svg";
import bookingAuth from "../../images/tour-booking-auth.svg";
import feedback from "../../images/feedback.svg";
import pushkin from "../../images/pushkin.svg";

function Tour() {
  // Сюда хотели по апи получать данные карточки в зависимости от того какую в каталоге выбрали
  // const { title, ... } = props;

  // 45660 - Минимальная цена за конкретный подтянутый тур
  const initialPrice = 45660;
  // Это за тур
  const [price, setPrice] = useState(initialPrice);
  // Это за доп услуги
  const [extraPrice, setExtraPrice] = useState(0);
  // количество человек по дефолту 1
  const [tourists, setTourists] = useState(1);

  const title = "Две столицы: Москва — Санкт-Петербург «Семейные каникулы»";

  const tags = [
    {
      name: "7 ночей",
      type: "length",
    },
    {
      name: "8 ночей",
      type: "length",
    },
    {
      name: "9 ночей",
      type: "length",
    },
  ];

  const plan = [
    {
      schedule: [
        {
          bullets: [
            "Самостоятельное прибытие в гостиницу (гарантированное размещение ― после 15:00).",
          ],
        },
        {
          time: "10:30–11:30",
          bullets: ["Встреча с гидом в холле гостиницы."],
        },
        {
          time: "12:00–20:00",
          bullets: [
            "Загородная экскурсия в Царское Село с посещением Екатерининского дворца и Янтарной комнаты.",
            "Свободное время для прогулки по паркам и посещения Царскосельского лицея.",
            "По желанию ― экскурсия в Павловск с посещением Павловского дворца (за дополнительную плату).",
            "Окончание программы в центре города.",
            "Самостоятельное возвращение в гостиницу.",
          ],
        },
        {
          time: "20:00–23:00",
          bullets: [
            "Автобусная экскурсия «Мистический Петербург» (за дополнительную плату).",
          ],
        },
      ],
      extra: [
        {
          image:
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз»",
          price: 600,
        },
        {
          image: "https://globalsib.com/wp-content/uploads/2022/11/6.jpg",
          about: "Музей",
          name: "Музей «‌Государственная Третьяковская галерея»",
          price: 500,
        },
        {
          image:
            "https://sun1-99.userapi.com/impg/2Q4GZxnaeVea_6ETkCr0H2Kl3aLRFp-Ss60OFw/WDv9oClwxEc.jpg?size=1280x836&quality=96&sign=22e4742afc631383385a1d90adf2381b&c_uniq_tag=ADjI5jM9ESP4HnB8Pv8OdlbKEiIkXq5HHeYXU1BXSKc&type=album",
          about: "Музей",
          name: "Музей Кунсткамера в Санкт-Петербурге",
          price: 700,
        },
      ],
    },
    {
      schedule: [
        {
          bullets: [
            "Самостоятельное прибытие в гостиницу (гарантированное размещение ― после 15:00).",
          ],
        },
        {
          time: "10:30–11:30",
          bullets: ["Встреча с гидом в холле гостиницы."],
        },
        {
          time: "12:00–20:00",
          bullets: [
            "Загородная экскурсия в Царское Село с посещением Екатерининского дворца и Янтарной комнаты.",
            "Свободное время для прогулки по паркам и посещения Царскосельского лицея.",
            "По желанию ― экскурсия в Павловск с посещением Павловского дворца (за дополнительную плату).",
            "Окончание программы в центре города.",
            "Самостоятельное возвращение в гостиницу.",
          ],
        },
        {
          time: "20:00–23:00",
          bullets: [
            "Автобусная экскурсия «Мистический Петербург» (за дополнительную плату).",
          ],
        },
      ],
      extra: [
        {
          image:
            "https://avatars.dzeninfra.ru/get-zen_doc/4467222/pub_61f7b8e72aef380b50f9bd3a_61f7ba6f0b0e4258978542ce/scale_1200",
          about: "Экскурсия",
          name: "Тур по крышам",
          price: 150,
        },
        {
          image:
            "https://avatars.dzeninfra.ru/get-zen_doc/1587710/pub_5ec2be61f7249d56194dc120_5ec52b16c5ff7a67429923f4/scale_1200",
          about: "Музей",
          name: "Национальный музей",
          price: 300,
        },
      ],
    },
  ];

  tags.forEach((tag) => {
    if (tag.type === "length") {
      tag.src = tagLengthIcon;
    } else if (tag.type === "...") {
      // ...
    }
  });

  const onCardClick = (e) => {
    if (e.target.className === "plan__day-extra-item") {
      console.log(e.target.querySelector(".plan__day-extra-name"));
      setExtraPrice(
        extraPrice +
          parseInt(
            e.target
              .querySelector(".plan__day-extra-price")
              .innerText.split(" ")[2]
          )
      );
      // Небольшой костыль
      document.querySelector(".pushkin").classList.remove("pushkin-none");
    }
  };

  const onTouristsChange = (e) => {
    setPrice(initialPrice * e.target.value);
    setTourists(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="tour">
        <section className="shortcut">
          <div className="shortcut__info">
            <h1 className="shortcut__title">{title}</h1>

            <ul className="shortcut__tag-list">
              {tags.map((tag, i) => (
                <li className="shortcut__tag" key={i}>
                  <img
                    src={tag.src}
                    alt="Иконка тэга"
                    className="shortcut__tag-icon"
                  />
                  <p className="shortcut__tag-name">{tag.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="shortcut__buttons">
            <Button
              width="169px"
              height="48px"
              bg="#FFCF08"
              main={`от ${initialPrice} ₽`}
              editional="Выбрать"
            />
            <img src={shortcutButtons} alt="" className="sb" />
          </div>
        </section>

        <img src={photoBlog} alt="" className="photo-blog-pic" />

        <div className="cols">
          <div className="col-1">
            <ul className="nav-tab">
              <li className="nav-tab__item">
                {/* <Link className={`nav-tab__link ${(location.pathname === "/movies") ? "nav-tab__link_active" : "" }`} to="/tour#about">О туре</Link> */}
                <a
                  className={`nav-tab__link ${
                    false ? "nav-tab__link_active" : ""
                  }`}
                  href="/tour#about"
                >
                  О туре
                </a>
              </li>
              <li className="nav-tab__item">
                {/* <Link className={`nav-tab__link ${(location.pathname === "/movies") ? "nav-tab__link_active" : "" }`} to="/tour#plan">Программа тура</Link> */}
                <a className="nav-tab__link active-link" href="/tour#plan">
                  Программа тура
                </a>
              </li>
              <li className="nav-tab__item">
                <a className="nav-tab__link active-link" href="/tour#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-tab__item">
                <a className="nav-tab__link active-link" href="/tour#feedback">
                  Отзывы
                </a>
              </li>
            </ul>

            <img src={aboutPic} alt="" className="about-pic" id={"about"} />
            {/* <img src={planPic} alt="" className="plan-pic" id={"plan"} /> */}

            <section className="plan" id={"plan"}>
              <h3 className="plan__title">Программа тура</h3>
              {plan.map((day, i) => (
                <div className="plan__day" key={"day-" + i}>
                  <div className="plan__day-container">
                    <div className="plan__day-number-container">
                      <div className="plan__day-number-bg">
                        <p className="plan__day-number">{i + 1}</p>
                      </div>
                      <p className="plan__day-text">день</p>
                    </div>
                    <img
                      src={planArrowIcon}
                      alt="Стрелка"
                      className="plan__day-arrow"
                    />
                  </div>

                  <div className="plan__day-schedule">
                    {day.schedule.map((item, j) => (
                      <div
                        className="plan__day-schedule-item"
                        key={"item-" + j}
                      >
                        {item.time && (
                          <p className="plan__day-time">{item.time}</p>
                        )}
                        <ul className="plan__day-bullets">
                          {item.bullets.map((bullet, k) => (
                            <li className="plan__day-bullet" key={"bullet" + k}>
                              <div className="plan__day-bullet-dot"></div>
                              <p className="plan__day-bullet-text">{bullet}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="plan__day-extra">
                      {day.extra.map((item, j) => (
                        <div
                          key={"extra-" + j}
                          className="plan__day-extra-item"
                          style={{ backgroundImage: "url(" + item.image + ")" }}
                          onClick={onCardClick}
                        >
                          <p className="plan__day-extra-about">{item.about}</p>
                          <p className="plan__day-extra-name">{item.name}</p>
                          <p className="plan__day-extra-price">{`Добавить за ${item.price} ₽`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <img src={faqPic} alt="" className="faq-pic" id={"faq"} />
          </div>

          <div className="col-2">
            <div className="col-2-form">
              <DateField id="col-2-date" />
              <TouristsField id="col-2-tourists" onChange={onTouristsChange} />
              <img src={pushkin} alt="" className="pushkin pushkin-none" />
              <Button
                width="100%"
                height="48px"
                bg="#FFCF08"
                main={`Купить тур от ${price + extraPrice} ₽`}
              />
            </div>
          </div>
        </div>

        <div className="booking">
          <div className="booking-1">
            <h3 className="booking-title">Забронировать тур</h3>
            <img src={bookingAuth} alt="" className="booking-auth-button" />
            {/* Форма должна была отправляться на бэк */}
            <form className="booking-form">
              <DateField id="booking-date" />
              <TouristsField
                id="booking-tourists"
                onChange={onTouristsChange}
              />
              <DefaultField
                id="booking-surname"
                span="Фамилия"
                placeholder="Иванов"
              />
              <DefaultField id="booking-name" span="Имя" placeholder="Иван" />
              <DefaultCheckbox
                id="booking-save-ch"
                span="Совет: сохраните данные о себе и близких, чтобы в будущем не вводить их снова"
              />
              <p className="booking-add-button">+ Добавить участника</p>
              <DefaultField
                id="booking-phone"
                span="Телефон"
                placeholder="+7 (999) 999-99-99"
              />
              <DefaultField
                id="booking-email"
                span="Почта"
                placeholder="example@mail.com"
                extra="На эту почту отправим подтверждение бронирования"
              />
              <BigField
                id="booking-comment"
                span="Комментарий"
                placeholder="Ваши пожелания"
              />
              <DefaultCheckbox
                id="booking-save-ch"
                span="Хочу получать письма об интересных событиях и выгодных предложениях"
              />
            </form>
          </div>
          <div className="booking-2">
              <img src={smallInfo} alt={title} className="small-info-pic" />
          </div>
        </div>

        <img src={pb} alt="" className="pb" />

        <Link to="/profile">
          <Button
            width="808px"
            height="48px"
            bg="#FFCF08"
            main="Перейти к оплате"
            editional={`${price + extraPrice} ₽ за ${tourists} туристов`}
          />
        </Link>

        <img src={feedback} alt={title} className="feedback" id={"feedback"} />
      </div>
    </>
  );
}

export default Tour;
