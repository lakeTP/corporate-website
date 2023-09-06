import { Nav, NavItem, StyledNavbar } from "../styles/Navbar";
import { Link } from "react-scroll";
const Navbar = () => {
	const navBarLinks = ["Главная", "Наши услуги", "Наши проекты", "Контакты"];
	return (
		<Nav>
			<StyledNavbar>
				{navBarLinks.map((el) => (
					<Link key={el} to={el} smooth={true} duration={1500}>
						<NavItem key={el}>{el}</NavItem>
					</Link>
				))}
			</StyledNavbar>
		</Nav>
	);
};

export default Navbar;
