import React from "react";
import styled from "styled-components";
import Paragraph from "components/Paragraph";

const HeaderWrapper = styled.div`
  background-color: #494430;
  flex-basis: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderParagraph = styled(Paragraph)`
  color: white;
  flex-basis: 30%;
  flex-grow: 1;
  text-align: center;
  font-size: 17px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderParagraph>Task name</HeaderParagraph>
      <HeaderParagraph>Priority</HeaderParagraph>
      <HeaderParagraph>Done</HeaderParagraph>
    </HeaderWrapper>
  );
};

export default Header;
