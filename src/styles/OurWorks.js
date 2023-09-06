import styled from "styled-components";
import background from "../assets/bg.jpg";

export const OurWorksWrapper = styled.section`
  position: relative;
  background: linear-gradient(90deg, #504dc2 20.44%, #5f12d0 80.91%),
    linear-gradient(0deg, #c4c4c4, #c4c4c4);

  max-width: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url(${background});
    background-size: cover;
    background-postiton: center;
    opacity: 0.2;
  }
  @media (max-width:1510px){
    j
  }
`;
export const OurWorksContainer = styled.div`
  position: relative;
  padding-top: 5rem;
  margin: 0 auto;
  max-width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width:1510px){
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
`;
export const OurWorksTitle = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 2.2rem;
`;

export const OurWorksCardWrapper = styled.div`
position: relative;
display: flex;
max-width: 90%
margin: 0 auto;
padding-bottom:3rem;

@media (max-width:1115px){
  flex-wrap: wrap;
}
`;
