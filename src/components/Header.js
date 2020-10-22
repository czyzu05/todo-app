import React from "react";
import styled from "styled-components";
import Paragraph from "components/Paragraph";

const HeaderWrapper = styled.div`
  background-color: #494430;
  flex-basis: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderParagraph = styled(Paragraph)`
  color: white;
  flex-basis: 25.1%;
  flex-grow: 1;
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
