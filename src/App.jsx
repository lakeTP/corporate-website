import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { Header, HeaderTitle, HeaderText } from "./styles/Header";
import { Main, MainTextBlock } from "./styles/Main";
import {
	GreyText,
	ServiceContent,
	Services,
	ServiceTitle,
} from "./styles/Services";
import { Wrapper } from "./styles/Wrapper";
import { AboutWrapper } from "./styles/AboutUs";
import Card from "./components/Card";
import AboutUs from "./components/AboutUs";
import { OurProjectsWrapper } from "./styles/OurProjects";
import OurProjects from "./components/OurProjects";
import {
	OurWorksCardWrapper,
	OurWorksContainer,
	OurWorksTitle,
	OurWorksWrapper,
} from "./styles/OurWorks";
import OurWorksCard from "./components/OurWorksCard";
import { PortfolioWrapper } from "./styles/PortfolioWrapper";
import Portfolio from "./components/Portfolio";
import {
	ContactsContainer,
	ContactsTitle,
	ContactsWrapper,
	SecondaryText,
} from "./styles/Contacts";
import Input from "./components/Input";
import { useState } from "react";
import BurgerButton from "./components/BurgerButton";
import MenuMobileNavbar from "./components/MenuMobileNavbar";

import { BsRobot } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";

import Technologes from "./components/Technologes";

function App() {
	const services = [
		{
			id: 1,
			icon: <RiPagesFill size={75} />,
			title: "Создание лендингов",
			desc: "Разработка  продающих лендингов, которые привлекут и удержат внимание вашей целевой аудитории. Наши эксперты создадут эффективный дизайн, удобную навигацию и уникальный контент, чтобы максимизировать конверсию и достичь ваших бизнес-целей.",
		},
		{
			id: 2,
			icon: <SlScreenDesktop size={75} />,
			title: "Разработка сайтов",
			desc: "Мы предлагаем разработку сайтов, которые не только красивы и интуитивно понятны, но и функционально мощны. Наши профессионалы создадут сайт с оптимизацией под мобильные устройства, интеграцией с социальными сетями, аналитикой и другими передовыми возможностями, чтобы обеспечить вашему бизнесу преимущество перед конкурентами.",
		},
		{
			id: 3,
			icon: <BsRobot size={65} />,
			title: "Создание телеграм ботов",
			desc: "Разработка телеграмм ботов, которые эффективно автоматизируют коммуникацию с клиентами, упрощают процессы заказа и обработки данных, а также предлагают персонализированный и быстрый сервис который точно отвечает вашим бизнес-потребностям, помогая повысить удовлетворенность и лояльность клиентов. .",
		},
	];

	const projects = [
		{
			count: 12,
			name: "Landing Pages",
		},
		{
			count: 2,
			name: "Telegram Bots",
		},

		{
			count: 3,
			name: "Web Applications",
		},
	];

	const [isMobile, setIsMobile] = useState(false);
	const [isMobileIcon, setIsIconMobile] = useState(false);

	function handleBurger() {
		setIsMobile((prev) => !prev);
		setIsIconMobile((prev) => !prev);
	}

	return (
		<>
			<Header>
				<Navbar />
				<BurgerButton isOpen={isMobileIcon} handleBurger={handleBurger} />
				{isMobile ? <MenuMobileNavbar /> : ""}
				<Wrapper id="Главная">
					<HeaderText>
						<p>Передовая IT студия</p>
						<HeaderTitle>
							Мы создаем легкие решения сложных задач и проблем
						</HeaderTitle>
						<Button text="Наши проекты" />
					</HeaderText>
				</Wrapper>
			</Header>

			<Main id="Наши услуги">
				<Services>
					<MainTextBlock>
						<ServiceTitle>
							Мы осуществляем разработку любой сложности
						</ServiceTitle>
						<GreyText>
							Лендинги, сайты, телеграмм боты: профессиональная разработка для
							вашего успеха.
						</GreyText>
					</MainTextBlock>
					<ServiceContent>
						{services.map((el) => (
							<Card key={el} title={el.title} desc={el.desc} icon={el.icon} />
						))}
					</ServiceContent>
					<Technologes />
					<Button text="Заказать услуги" />
				</Services>

				<AboutWrapper>
					<AboutUs />
					<OurProjectsWrapper>
						{projects.map((el) => (
							<OurProjects key={el.count} count={el.count} name={el.name} />
						))}
					</OurProjectsWrapper>
				</AboutWrapper>
				<OurWorksWrapper id="Наши проекты">
					<OurWorksContainer>
						<OurWorksTitle>
							Наши работы, на которых мы специализируемся
						</OurWorksTitle>
						<Button text="Заказать услуги" />
					</OurWorksContainer>

					<OurWorksCardWrapper>
						<OurWorksCard />
					</OurWorksCardWrapper>
				</OurWorksWrapper>

				<PortfolioWrapper>
					<Portfolio />
				</PortfolioWrapper>

				<ContactsWrapper id="Контакты">
					<ContactsContainer>
						<ContactsTitle>Свяжитесь с нами</ContactsTitle>
						<SecondaryText>
							Полезные статьи, акции, новости - получите все это сейчас!
						</SecondaryText>
						<Input />
					</ContactsContainer>
				</ContactsWrapper>
			</Main>
		</>
	);
}

export default App;
