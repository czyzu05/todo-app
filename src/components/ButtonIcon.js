import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 9000;
  position: absolute;
  bottom: 50px;
  right: 15px;
`;

const PlusIcon = styled.i`
  font-size: 30px;
`;

const ButtonIcon = ({ taskFormVisibleToggle }) => {
  return (
    <StyledButton onClick={taskFormVisibleToggle}>
      <PlusIcon className="fas fa-plus"></PlusIcon>
    </StyledButton>
  );
};

export default ButtonIcon;
