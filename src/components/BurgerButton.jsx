import { useState } from "react";
import styled from "styled-components";

import { RxCross1 } from "react-icons/rx";

export const BurgerContainer = styled.div`
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  width: 30px;
  flex-direction: column;
  gap: 0.4rem;

  @media (min-width: 690px) {
    display: none;
  }
`;
export const BurgerItem = styled.span`
  background: #fff;
  border-radius: 5px;
  width: 30px;
  height: 3px;
`;
const CloseIconStyle = {
  color: "#fff",
};

const BurgerButton = ({ isOpen, handleBurger }) => {
  return (
    <BurgerContainer onClick={handleBurger}>
      {isOpen ? (
        <RxCross1 style={CloseIconStyle} size={30} />
      ) : (
        <>
          <BurgerItem></BurgerItem>
          <BurgerItem></BurgerItem>
          <BurgerItem></BurgerItem>
        </>
      )}
    </BurgerContainer>
  );
};

export default BurgerButton;
