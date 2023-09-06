import style from "./OurWorks.module.css";
import ImgCard from "../assets/ourWorks.png";
const aboutWorks = [
	{
		id: 1,
		imgWorks: "src/assets/dis.jpg",
		header: "Исследование дизайна",
		text: "Мы верим в то, что хороший дизайн - это не только красивая оболочка, но и воплощение философии, целей и уникальности вашего проекта. Исследование дизайна является ключевым этапом в создании вашего продукта.",
	},
	{
		id: 2,
		imgWorks: "src/assets/verstka.jpg",
		header: "Верстка веб-сайта",
		text: "Верстка является фундаментальной частью создания качественного и функционального веб-сайта. Мы понимаем, что пользователи ищут удобство и интуитивно понятную навигацию при посещении веб-страниц.",
	},
	{
		id: 3,
		imgWorks: "src/assets/optim.jpg",
		header: "Оптимизация производительности",
		text: "Пользователи сегодня ожидают, чтобы веб-страницы загружались мгновенно и моментально реагировали на их взаимодействие. Вот почему оптимизация производительности является одним из важнейших аспектов веб-разработки.",
	},
];

const OurWorksCard = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.containers}>
				{aboutWorks.map(({ id, text, header, imgWorks }) => (
					<div key={id} className={style.container}>
						<img src={imgWorks} width={200} alt="Our Works" />

						<h3 className={style.bold__text}>
							<strong>
								0{id}.{header}
							</strong>
						</h3>

						<div className={style.contentWrap}>
							<p className={style.contentText}>{text}</p>
						</div>
						<div className={style.link}>
							<a href="#">Подробнее</a>
						</div>
					</div>
				))}
			</div>
		</div>
		// </div>
	);
};

export default OurWorksCard;
