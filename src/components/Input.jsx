import React from "react";
import Button from "./Button";
import style from '../styles/Input.module.css'

const Input = () => {
  return (
    <>
      <div className={style.container__input}>
        <div>
          <input className={style.input} placeholder='Введите Ваш Email' />
        </div>
        <div className={style.button__input}>
          <Button text='Отправить сообщение' />
        </div>
      </div>
    </>
  );
};

export default Input;
