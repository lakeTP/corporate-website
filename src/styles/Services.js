import styled from "styled-components";

export const Services = styled.section`
	margin-top: 4rem;
	max-width: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const ServiceTitle = styled.h1`
	font-weight: 700;
	font-size: 1.7rem;
	color: #323232;
`;
export const GreyText = styled.p`
	margin-top: 1rem;
	color: #999999;
	font-size: 1rem;
`;

export const ServiceContent = styled.div`
	max-width: 95%;
	margin: 0 auto;
	gap: 60px;
	padding: 10px 5px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
