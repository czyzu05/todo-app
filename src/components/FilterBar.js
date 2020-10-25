import React from "react";
import styled from "styled-components";
import Paragraph from "components/Paragraph";

const FilterWrapper = styled.div`
  flex-basis: 5vh;
  padding: 10px 0;
  background-color: darkcyan;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Arrow = styled.i`
  flex-basis: 20px;
  font-size: 25px;
  margin: 0 20px 0 0;
`;

const SelectRows = styled.select`
  padding: 3px 5px;
  font-size: 15px;
  color: #333;
  background-color: #eee;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 10px;
`;

const FilterBar = ({ setNumberRows, numberRows, numberTasks }) => {
  const handleNumberRows = e => {
    setNumberRows(e.target.value);
  };

  return (
    <FilterWrapper>
      <label for="rowsSelect">Rows per Page:</label>
      <SelectRows
        name="rows"
        id="rowsSelect"
        value={numberRows}
        onChange={handleNumberRows}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </SelectRows>
      <Paragraph>
        1-{numberRows} of {numberTasks}
      </Paragraph>
      <Arrow className="fas fa-chevron-left" />
      <Arrow className="fas fa-chevron-right" />
    </FilterWrapper>
  );
};

export default FilterBar;
