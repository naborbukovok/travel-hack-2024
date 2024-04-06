import tagLengthIcon from "../../images/tour-tag-length-icon.svg";
import planArrowIcon from "../../images/tour-plan-arrow-icon.svg";

import "./Tour.css";

function Tour() {
  // const { title, ... } = props;
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
          image: "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз",
        },
        {
          image: "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз",
        },
        {
          image: "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз",
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
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз",
        },
        {
          image:
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз",
        },
        {
          image:
            "https://static.tildacdn.com/tild3136-6335-4530-a235-646133356632/5ce26227d414a.jpg",
          about: "Музей",
          name: "ГМИИ им. А.С. Пушкина. Выставка «Брат Иван. Коллекции Михаила и Ивана Мороз",
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

  return (
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

      <section className="plan">
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
      </section>
    </div>
  );
}

export default Tour;
