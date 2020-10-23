import React from "react";
// import styled from "styled-components";
import Input from "components/Input";
import Button from "components/Button";

const AddTaskForm = () => {
  return (
    <div>
      <h1>Add new Note</h1>
      <Input placeholder="title" />
      <select name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <Button>Add Note</Button>
    </div>
  );
};

export default AddTaskForm;
