import React from "react";
import styled from "styled-components";
import TaskItem from "components/TaskItem";

const TasksWrapper = styled.div``;

const TasksList = ({ tasks, changeTaskStatus, numberRows }) => {
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

  if (tasksList.length >= numberRows) {
    return <TasksWrapper>{tasksList.slice(0, numberRows)}</TasksWrapper>;
  } else {
    return <TasksWrapper>{tasksList}</TasksWrapper>;
  }
};

export default TasksList;
