import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "components/Input";
import Button from "components/Button";

const FormWrapper = styled.form`
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

  @media (min-width: 1200px) {
    width: 30vw;
  }
`;

const Header = styled.h1`
  font-size: 35px;
  text-align: center;
  padding: 25px;
`;

const SelectPriority = styled.select`
  border: 2px solid #494430;
  cursor: pointer;
  width: 200px;
  font-size: 20px;
  margin: 20px;
`;

const AddButton = styled(Button)`
  font-size: 20px;
  padding: 10px;
  width: 150px;

  :hover {
    border: 2px solid black;
    cursor: pointer;
  }
`;

const AddTaskForm = ({
  isVisible,
  setIsAddTaskFormVisible,
  tasks,
  setTasks,
  setPriority,
  priority,
}) => {
  const [inputText, setInputText] = useState("");

  const handleInputText = e => {
    setInputText(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (inputText.length > 1) {
      const newTask = {
        title: inputText,
        done: false,
        priority: priority,
        id: Math.random() * 100,
      };
      setTasks([...tasks, newTask]);
      setInputText("");
      setPriority("Low");
      setIsAddTaskFormVisible(false);
    }
  };

  const handleSelectPriority = e => {
    setPriority(e.target.value);
  };

  return (
    <FormWrapper isVisible={isVisible} onSubmit={handleSubmitForm}>
      <Header>Add new Note</Header>
      <Input placeholder="Title" onChange={handleInputText} value={inputText} />
      <SelectPriority
        name="priority"
        value={priority}
        onChange={handleSelectPriority}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </SelectPriority>
      <AddButton>Add Note</AddButton>
    </FormWrapper>
  );
};

AddTaskForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  priority: PropTypes.string.isRequired,
};

export default AddTaskForm;
