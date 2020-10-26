import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TaskItem from "components/TaskItem";

const TasksWrapper = styled.div``;

const TasksList = ({
  tasks,
  changeTaskStatus,
  numberRows,
  handleDeleteTask,
  endNumberRows,
  startNumberRows,
}) => {
  const tasksList = tasks.map(task => (
    <TaskItem
      key={task.id}
      id={task.id}
      title={task.title}
      priority={task.priority}
      done={task.done}
      changeTaskStatus={changeTaskStatus}
      handleDeleteTask={handleDeleteTask}
      task={task}
    />
  ));

  if (tasksList.length >= numberRows) {
    return (
      <TasksWrapper>
        {tasksList.slice(startNumberRows, endNumberRows)}
      </TasksWrapper>
    );
  } else {
    return <TasksWrapper>{tasksList}</TasksWrapper>;
  }
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  changeTaskStatus: PropTypes.func,
  numberRows: PropTypes.number,
  handleDeleteTask: PropTypes.func,
};

export default TasksList;
