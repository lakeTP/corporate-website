import { Link } from "react-scroll";
import styled from "styled-components";

export const MobileNav = styled.nav`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	position: sticky;
	@media (min-width: 690px) {
		display: none;
	}
`;
export const MobileNavBar = styled.ul`
	position: absolute;
	padding-top: 2rem;
	display: flex;
	top: 2.5rem;
	right: 0.25rem;
	width: 50%;
	height: 400px;
	border-radius: 20px;
	flex-direction: column;
	align-items: center;
	gap: 1.85rem;
	backdrop-filter: blur(10px);
`;
export const NavItem = styled.li`
	cursor: pointer;
	height: 35px;
	font-weight: 500;
	font-size: 1.1rem;
	text-shadow: 3px 6px 5px #000000;
	color: #fff;

	&:hover {
		border-bottom: 2px solid #fff;
		color: #e4e4e4;
	}
`;

const MenuMobileNavbar = () => {
	const navBarLinks = ["Главная", "Наши услуги", "Наши проекты", "Контакты"];
	return (
		<MobileNav>
			<MobileNavBar>
				{navBarLinks.map((el) => (
					<Link key={el} to={el} smooth={true} duration={1000}>
						<NavItem key={el}>{el}</NavItem>
					</Link>
				))}
			</MobileNavBar>
		</MobileNav>
	);
};

export default MenuMobileNavbar;
