import React from "react";
import styled from "styled-components";
import TaskItem from "components/TaskItem";

const TasksWrapper = styled.div`
  flex-basis: 75vh;
  background-color: darkslategrey;
`;

const TasksList = ({ tasks, changeTaskStatus }) => {
  const tasksList = tasks.map(task => (
    <TaskItem
      key={task.id}
      id={task.id}
      title={task.title}
      priority={task.priority}
      done={task.done}
      changeTaskStatus={changeTaskStatus}
    />
  ));

  return <TasksWrapper>{tasksList}</TasksWrapper>;
};

export default TasksList;
