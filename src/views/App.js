import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "components/Header";
import TasksList from "components/TasksList";
import FilterBar from "components/FilterBar";
import GlobalStyles from "theme/GlobalStyles";
import ButtonIcon from "components/ButtonIcon";
import AddTaskForm from "components/AddTaskForm";
import Paragraph from "components/Paragraph";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 6px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Text = styled(Paragraph)`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddTaskFormVisible, setIsAddTaskFormVisible] = useState(false);
  const [priority, setPriority] = useState("Low");
  const [numberRows, setNumberRows] = useState(5);
  const [startNumberRows, setStartNumberRows] = useState(0);
  const [endNumberRows, setEndNumberRows] = useState(5);

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
        {tasks.length === 0 ? (
          <Text>Add new task by clicking button at the bottom</Text>
        ) : (
          <>
            {" "}
            <TasksList
              tasks={tasks}
              changeTaskStatus={changeTaskStatus}
              numberRows={numberRows}
              handleDeleteTask={handleDeleteTask}
              startNumberRows={startNumberRows}
              endNumberRows={endNumberRows}
            />
            <FilterBar
              numberRows={numberRows}
              setNumberRows={setNumberRows}
              numberTasks={tasks.length}
              startNumberRows={startNumberRows}
              endNumberRows={endNumberRows}
              setEndNumberRows={setEndNumberRows}
              setStartNumberRows={setStartNumberRows}
            />
          </>
        )}

        <ButtonIcon taskFormVisibleToggle={handleTaskFormVisibleToggle} />
      </Wrapper>

      <AddTaskForm
        isVisible={isAddTaskFormVisible}
        setIsAddTaskFormVisible={setIsAddTaskFormVisible}
        tasks={tasks}
        setTasks={setTasks}
        priority={priority}
        setPriority={setPriority}
      />
    </>
  );
};

export default App;
