import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paragraph from "components/Paragraph";

const FilterWrapper = styled.div`
  flex-basis: 5vh;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  label {
    font-size: 17px;
  }
`;

const Arrow = styled.i`
  font-size: 20px;
  margin: 0 5px 0 5px;
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

const ChangePageButton = styled.button`
  width: 30px;
  height: 35px;
  cursor: pointer;
  font-size: 14px;
  margin: 0 8px;
  background-color: transparent;
  border: none;

  :hover {
    border: 1px solid black;
  }
`;

const FilterBar = ({
  setNumberRows,
  numberRows,
  numberTasks,
  endNumberRows,
  startNumberRows,
  setEndNumberRows,
  setStartNumberRows,
}) => {
  const handleNumberRows = e => {
    setEndNumberRows(parseInt(e.target.value, 10) + startNumberRows);
    setNumberRows(parseInt(e.target.value, 10));
  };

  const displayNextPage = direction => {
    switch (direction) {
      case "right":
        if (endNumberRows >= numberTasks) {
          setEndNumberRows(numberTasks + 1);
        } else {
          setEndNumberRows(endNumberRows + numberRows);
          setStartNumberRows(startNumberRows + numberRows);
        }
        break;
      case "left":
        if (startNumberRows - numberRows <= 0) {
          setStartNumberRows(0);
          setEndNumberRows(numberRows);
        } else {
          setEndNumberRows(endNumberRows - numberRows);
          setStartNumberRows(startNumberRows - numberRows);
        }
        break;
      default:
        return null;
    }
  };

  return (
    <FilterWrapper>
      <label htmlFor="rowsSelect">Rows per Page:</label>
      <SelectRows
        name="rows"
        id="rowsSelect"
        value={numberRows}
        onChange={handleNumberRows}
      >
        <option value={5}>{5}</option>
        <option value={10}>{10}</option>
        <option value={15}>{15}</option>
      </SelectRows>
      <Paragraph>
        {startNumberRows + 1}-{endNumberRows} of {numberTasks}
      </Paragraph>
      <ChangePageButton onClick={() => displayNextPage("left")}>
        <Arrow className="fas fa-chevron-left" />
      </ChangePageButton>
      <ChangePageButton onClick={() => displayNextPage("right")}>
        <Arrow className="fas fa-chevron-right" />
      </ChangePageButton>
    </FilterWrapper>
  );
};

FilterBar.propTypes = {
  numberRows: PropTypes.number.isRequired,
  numberTasks: PropTypes.number,
  endNumberRows: PropTypes.number.isRequired,
  startNumberRows: PropTypes.number.isRequired,
};
FilterBar.defaultProps = {
  numberTasks: 0,
};

export default FilterBar;
