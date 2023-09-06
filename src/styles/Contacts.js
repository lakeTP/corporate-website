import styled from "styled-components";

export const ContactsWrapper = styled.section`
  margin-top: 4rem;
  max-width: 100%;
  min-height: 500px;
  background-color: #fff;
`;
export const ContactsContainer = styled.div`
  display: flex;
  box-shadow: 0px 10px 38px 3px rgba(34, 60, 80, 0.1);
  border-radius: 15px;
  padding: 4.5rem;
  margin: 0 auto;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width:1269px){
    max-width:90%;
  }
`;
export const ContactsTitle = styled.h1`
  max-width: 50%;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  background-color: #fff;
 
  @media (max-width:1269px){
    max-width:100%;
    font-size: 1.5rem;
  }
`;
export const SecondaryText = styled.p`
  text-align: center;
  color: #999999;

  @media (max-width:1269px){
    max-width:100%;
    tex-align: justify;
    font-size: 1rem;
  }
`;
