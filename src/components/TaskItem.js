import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const TaskItemWrapper = styled.div`
  background-color: "yellow";
  height: 50px;
  border-bottom: 2px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskInfo = styled(Paragraph)`
  color: white;
  flex-basis: 25.1%;
  flex-grow: 1;
`;

const InputWrapper = styled.div`
  flex-basis: 25.1%;
  flex-grow: 1;
`;

const TaskItem = ({ id, title, priority, done, changeTaskStatus }) => {
  return (
    <TaskItemWrapper>
      <TaskInfo>{title}</TaskInfo>
      <TaskInfo>{priority}</TaskInfo>
      <InputWrapper>
        <input
          type="checkbox"
          checked={done}
          onChange={() => changeTaskStatus(id)}
        />
      </InputWrapper>
    </TaskItemWrapper>
  );
};

export default TaskItem;