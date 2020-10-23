import React from "react";
import styled from "styled-components";
import Input from "components/Input";
import Button from "components/Button";

const FormWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  top: 0;
  background-color: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.5s ease;
`;

const Header = styled.h1`
  font-size: 30px;
  text-align: center;
  padding: 20px;
`;

const SelectPriority = styled.select`
  border: 2px solid #494430;
  cursor: pointer;
  width: 10rem;
  margin: 20px;
`;

const AddTaskForm = ({ isVisible }) => {
  return (
    <FormWrapper isVisible={isVisible}>
      <Header>Add new Note</Header>
      <Input placeholder="title" />
      <SelectPriority name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </SelectPriority>
      <Button>Add Note</Button>
    </FormWrapper>
  );
};

export default AddTaskForm;
