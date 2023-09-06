import styled from "styled-components";

export const Nav = styled.nav`
	padding-top: 1.2rem;
	border-bottom: 2px solid rgba(255, 255, 255, 0.3);
	@media (max-width: 690px) {
		display: none;
	}
`;

export const StyledNavbar = styled.ul`
	display: flex;
	max-width: 75%;
	justify-content: flex-end;
	flex-wrap: wrap;
	gap: 1.5rem;
	font-size: 1.2rem;
`;

export const NavItem = styled.li`
	cursor: pointer;
	height: 58px;
	font-weight: 500;
	color: #fff;

	&:hover {
		border-bottom: 2px solid #fff;
		color: #999;
	}
`;
