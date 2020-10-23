import React, { useState } from "react";
import styled from "styled-components";
import Header from "components/Header";
import TasksList from "components/TasksList";
import FilterBar from "components/FilterBar";
import GlobalStyles from "theme/GlobalStyles";
import ButtonIcon from "components/ButtonIcon";
import AddTaskForm from "components/AddTaskForm";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: darkgreen;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Task1",
      priority: "Medium",
      done: false,
    },
    {
      id: 1,
      title: "Task2",
      priority: "Medium",
      done: false,
    },
    {
      id: 2,
      title: "Task3",
      priority: "High",
      done: false,
    },
    {
      id: 3,
      title: "Task4",
      priority: "Low",
      done: true,
    },
  ]);

  const changeTaskStatus = id => {
    const tasksList = [...tasks];
    tasksList[id].done = !tasks[id].done;
    setTasks(tasksList);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <TasksList tasks={tasks} changeTaskStatus={changeTaskStatus} />
        <ButtonIcon />
        <FilterBar />
      </Wrapper>
      <AddTaskForm />
    </>
  );
};

export default App;
