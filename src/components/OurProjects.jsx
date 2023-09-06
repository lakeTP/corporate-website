import React from "react";
import { FaFileCode } from "react-icons/fa";
import style from "../styles/OurProjects.module.css";

const OurProjects = ({ count, name }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.icon__block}>
          <FaFileCode className={style.icon} size={30} />
          <h3>{count}</h3>
        </div>
        <p className={style.project}>{name}</p>
      </div>
    </div>
  );
};

export default OurProjects;
