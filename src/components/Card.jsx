import React from "react";


import style from "../styles/Card.module.css";


const Card = ({ desc, title, icon }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.card__block}>
          {icon}
        </div>
        <div className={style.card__text}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
