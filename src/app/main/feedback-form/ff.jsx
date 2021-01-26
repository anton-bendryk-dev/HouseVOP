// FEEDBACK FORM
import React from "react";

const FeedBackForm = () => {
  return (
    <div>
      <div className="fb-box">
        <div className="fb-text">
          <input type="text" placeholder="Ваше имя"></input>
        </div>
      </div>
      <div className="fb-box">
        <div className="fb-text">
          <input type="tel" placeholder="Ваш телефон"></input>
        </div>
      </div>
      <div className="fb-box">
        <p>
          *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
        </p>
      </div>
      <div className="fb-box">
        <div className="fb-btn">
          <a href="#">Посмотреть район</a>
        </div>
      </div>
    </div>
  );
};
export default FeedBackForm;
