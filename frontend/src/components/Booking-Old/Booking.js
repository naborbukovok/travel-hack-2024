import chatImage from "../../images/chat-image.svg";
import paymentTemplate from "../../images/payment-template.png";

import "./Booking.css";

function Booking() {
  return (
    <div className="booking">
      <h1 className="booking__title">Данные заказа</h1>
      <div className="booking__columns">
        <ul className="booking__chat">
          <li className="booking__chat-block">
            <img className="booking__chat-image" src={chatImage} alt="Чат-бот" />

            <div className="booking__chat-messages">
              <section className="message">
                <h2 className="message__title">
                  До мечты осталась пара шагов
                </h2>
                <p className="message__text">
                  Пожалуйста, введите свой номер телефона.
                </p>
              </section>

              <button className="button" type="button">
                Продолжить
              </button>

              <section className="message">
                <h2 className="message__title">
                  Введите код
                </h2>
                <p className="message__text">
                  Отправили смс на +7 (987) 654-32-10.
                </p>
              </section>

              <button className="button" type="button">
                Подтвердить
              </button>
            </div>
          </li>

          <li className="booking__chat-block">
            <img className="booking__chat-image" src={chatImage} alt="Чат-бот" />

            <div className="booking__chat-messages">
              <section className="message">
                <h2 className="message__title">
                  Похоже, мы не были знакомы!
                </h2>
                <p className="message__text">
                  Благодарим за выбор RUSSPASS. Мы подготовили для Вас
                  персональную карту путешествий, которая будет все больше
                  заполняться с каждым новым приключением на нашем портале.
                  Совсем скоро на ней появится первое достижение.
                </p>
              </section>

              <section className="message">
                <h2 className="message__title">
                  Кто отправляется в поездку?
                </h2>
                <p className="message__text">
                  Заполните информацию о путешественниках.
                </p>
              </section>

              <button className="button" type="button">
                Подтвердить
              </button>
            </div>
          </li>

          <li className="booking__chat-block">
            <img className="booking__chat-image" src={chatImage} alt="Чат-бот" />
            
            <div className="booking__chat-messages">
              <section className="message">
                <h2 className="message__title">
                  Оплачивается отдельно
                </h2>
                <p className="message__text">
                  Сделайте свой отдых насыщеннее с дополнительными
                  возможностями.
                </p>
              </section>

              <section className="message">
                <h2 className="message__title">
                  Что-то ещё?
                </h2>
                <p className="message__text">
                  Нужен ранний заезд или номер с окнами на север? Расскажите о
                  своих пожеланиях, и мы передадим их туроператору.
                </p>
              </section>
            </div>
          </li>

          <li className="booking__chat-block">
            <img className="booking__chat-image" src={chatImage} alt="Чат-бот" />

            <div className="booking__chat-messages">
              <section className="message">
                <h2 className="message__title">
                  Осталось только оплатить!
                </h2>
                <p className="message__text">
                  Проверьте правильно ли введены все данные и оплатите
                  бронирование тура.
                </p>
              </section>

              <button className="button" type="button">
                Перейти к оплате
              </button>
            </div>
          </li>

          <li className="booking__chat-block">
            <img className="booking__chat-image" src={chatImage} alt="Чат-бот" />

            <div className="booking__chat-messages">
              <section className="message">
                <img className="message__payment-template" src={paymentTemplate} alt="Шаблон оплаты" />
              </section>
            </div>
          </li>

          <li className="booking__chat-block">
            <img className="booking__chat-image" src={chatImage} alt="Чат-бот" />

            <div className="booking__chat-messages">
              <section className="message">
                <h2 className="message__title">
                  Вы забронировали первый тур!
                </h2>
                <p className="message__text">
                  Детали покупки отправили на pochta@yandex.ru и сохранили в личном кабинете.
                </p>
              </section>

              <section className="message">
                <h2 className="message__title">
                  Оцените удобство бронирования
                </h2>
                <p className="message__text">
                  Это поможет нам стать лучше.
                </p>
              </section>

              <button className="button" type="button">
                Перейти в личный кабинет
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Booking;
