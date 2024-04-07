// import { useLocation, Link } from "react-router-dom";
import { Link } from "react-router-dom";

import tagLengthIcon from "../../images/tour-tag-length-icon.svg";
import planArrowIcon from "../../images/tour-plan-arrow-icon.svg";
import photoBlog from "../../images/photo-blog.svg";
import aboutPic from "../../images/tour-about-pic.svg";
import planPic from "../../images/tour-plan-pic.svg";
import faqPic from "../../images/tour-faq-pic.svg";
import bookingAuth from "../../images/tour-booking-auth.svg";
import buttonPic from "../../images/tour-button-pic.svg";

import "./Tour.css";
import TouristsField from "../TouristsField/TouristsField";
import DateField from "../DateField/DateField";
import DefaultField from "../DefaultField/DefaultField";
import DefaultCheckbox from "../DefaultCheckbox/DefaultCheckbox";
import BigField from "../BigField/BigField";
import Header from "../Header/Header";

function Tour() {
  // const { title, ... } = props;
  // const location = useLocation();

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
        },
        {
          image:
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз»",
        },
        {
          image:
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз»",
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
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз»",
        },
        {
          image:
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз»",
        },
        {
          image:
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз»",
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
    console.log(e.target.children[1]);
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
            <p>Вторая колонка</p>
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
              <TouristsField id="col-2-tourists" />
            </div>
          </div>
        </div>

        <div className="booking">
          <div className="booking-1">
            <h3 className="booking-title">Забронировать тур</h3>
            <img src={bookingAuth} alt="" className="booking-auth-button" />
            <form className="booking-form">
              <DateField id="booking-date" />
              <TouristsField id="booking-tourists" />
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
          <div className="booking-2"></div>
        </div>

        <Link to="/profile">
          <img src={buttonPic} alt="" className="button-pic" />
        </Link>

        {/* <section className="plan" id={"plan"}>
        <h3 className="plan__title">Программа тура</h3>
        {plan.map((day, i) => (
          <div className="plan__day" key={i}>
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
                <div className="plan__day-schedule-item" key={j}>
                  {item.time && <p className="plan__day-time">{item.time}</p>}
                  <ul className="plan__day-bullets">
                    {item.bullets.map((bullet, k) => (
                      <li className="plan__day-bullet" key={k}>
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
                    className="plan__day-extra-item"
                    style={{ backgroundImage: "url(" + item.image + ")" }}
                    key={j}
                  >
                    <p className="plan__day-extra-about">{item.about}</p>
                    <p className="plan__day-extra-name">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section> */}
      </div>
    </>
  );
}

export default Tour;
