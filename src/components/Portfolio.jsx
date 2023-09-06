import React from "react";
import style from "../styles/Portfolio.module.css";
import ImgPortfolio from "../assets/portfolio.png";
import Button from "./Button";
const Portfolio = () => {
	const links = [
		{
			id: 1,
			link: ImgPortfolio,
		},
		{
			id: 2,
			link: ImgPortfolio,
		},
		{
			id: 3,
			link: ImgPortfolio,
		},
		{
			id: 4,
			link: ImgPortfolio,
		},
	];
	return (
		<div className={style.container}>
			<div className={style.text__block}>
				<h2>Наши Проекты</h2>
				<p>
					Наша компания имеет богатый опыт в разработке различных проектов,
					включая веб-сайты и телеграм-боты. Наша команда разработчиков и
					дизайнеров постоянно стремится к высокому качеству работ и учитывает
					последние технологические тренды. Вот несколько примеров проектов, над
					которыми мы работали:
				</p>
			</div>
			<div className={style.projects__wrapper}>
				{links.map((el) => (
					<img key={el.id} src={el.link} />
				))}
			</div>
			<Button text="Смотреть проекты" />
		</div>
	);
};

export default Portfolio;
