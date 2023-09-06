import styled from "styled-components";

export const Header = styled.header`
	max-width: 100%;
	min-height: 80vh;
`;
export const HeaderText = styled.div`
	display: flex;
	max-width: 38%;
	min-height: 300px;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	font-size: 1rem;
	font-weight: 600;
	text-align: center;
	color: #fff;
	@media (max-width: 702px) {
		font-size: 1rem;
	}
`;
export const HeaderTitle = styled.h1`
	font-weight: 800;
	font-size: 2rem;
	padding: 10px 0px 50px 0px;
	@media (max-width: 702px) {
		font-size: 1.5rem;
		width: 100%;
	}
	@media (max-width: 530px) {
		width: 120%;
	}
	@media (max-width: 440px) {
		width: 160%;
	}
`;
