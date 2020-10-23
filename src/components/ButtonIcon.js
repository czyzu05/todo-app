import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const PlusIcon = styled.i`
  font-size: 30px;
`;

const ButtonIcon = () => {
  return (
    <StyledButton>
      <PlusIcon className="fas fa-plus"></PlusIcon>
    </StyledButton>
  );
};

export default ButtonIcon;
