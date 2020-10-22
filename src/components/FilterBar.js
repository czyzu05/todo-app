import React from "react";
import styled from "styled-components";
import Paragraph from "components/Paragraph";

const FilterWrapper = styled.div`
  flex-basis: 15vh;
  background-color: darkcyan;
`;

const FilterBar = () => {
  return (
    <FilterWrapper>
      <Paragraph>Footer</Paragraph>
    </FilterWrapper>
  );
};

export default FilterBar;
