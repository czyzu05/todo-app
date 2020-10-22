import React from "react";
import styled from "styled-components";
import Paragraph from "components/Paragraph";

const TasksWrapper = styled.div`
  flex-basis: 75vh;
  background-color: darkslategrey;
`;

const TasksList = () => {
  return (
    <TasksWrapper>
      <Paragraph>Task</Paragraph>
    </TasksWrapper>
  );
};

export default TasksList;
