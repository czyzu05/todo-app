import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 9000;
  position: fixed;
  bottom: 35px;
  right: 25px;
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

ButtonIcon.propTypes = {
  taskFormVisibleToggle: PropTypes.func,
};
export default ButtonIcon;
