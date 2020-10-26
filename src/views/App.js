import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "components/Header";
import TasksList from "components/TasksList";
import FilterBar from "components/FilterBar";
import GlobalStyles from "theme/GlobalStyles";
import ButtonIcon from "components/ButtonIcon";
import AddTaskForm from "components/AddTaskForm";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 6px;
  display: flex;
  flex-direction: column;
  position: relative;
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
    {
      id: 4,
      title: "Task5",
      priority: "Low",
      done: true,
    },
    {
      id: 5,
      title: "Task6",
      priority: "Low",
      done: true,
    },
  ]);
  const [isAddTaskFormVisible, setIsAddTaskFormVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [numberRows, setNumberRows] = useState(5);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const handleTaskFormVisibleToggle = () => {
    setIsAddTaskFormVisible(!isAddTaskFormVisible);
  };

  const changeTaskStatus = id => {
    let tasksList = [...tasks];
    const index = tasksList.findIndex(task => task.id === id);
    tasksList[index].done = !tasksList[index].done;
    setTasks(tasksList);
  };

  const handleDeleteTask = id => {
    let tasksList = [...tasks];
    tasksList = tasksList.filter(task => task.id !== id);
    setTasks(tasksList);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <TasksList
          tasks={tasks}
          changeTaskStatus={changeTaskStatus}
          numberRows={numberRows}
          handleDeleteTask={handleDeleteTask}
        />
        <FilterBar
          numberRows={numberRows}
          setNumberRows={setNumberRows}
          numberTasks={tasks.length}
        />
        <ButtonIcon taskFormVisibleToggle={handleTaskFormVisibleToggle} />
      </Wrapper>

      <AddTaskForm
        isVisible={isAddTaskFormVisible}
        setIsAddTaskFormVisible={setIsAddTaskFormVisible}
        setInputText={setInputText}
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        priority={priority}
        setPriority={setPriority}
      />
    </>
  );
};

export default App;
