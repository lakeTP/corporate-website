import React from "react";
import style from "../styles/AboutUs.module.css";
import Img from "../assets/aboutUs.png";

const AboutUs = () => {
	return (
		<div className={style.container}>
			<div className={style.aboutUs__text}>
				<h2 className={style.aboutUs_head}>Высокие стандарты разработки</h2>
				<p className={style.aboutUs_par}>
					Высокие стандарты разработки веб-сайтов и телеграм-ботов являются
					неотъемлемой частью создания качественных и удобных для пользователей
					продукта. Они обеспечивают безопасность, оптимальную работу и
					когнитивно понятный интерфейс. В целом, высокие стандарты разработки
					веб-сайтов и телеграм-ботов гарантируют создание качественных и
					профессиональных продуктов, которые удовлетворяют потребности
					пользователей и обеспечивают безопасность и эффективность.
				</p>
				<a href="#">Подробнее о компании</a>
			</div>
			<div>
				<img
					src={Img}
					className={style.aboutUs__img}
					alt="about us"
					width={350}
				/>
			</div>
		</div>
	);
};

export default AboutUs;
