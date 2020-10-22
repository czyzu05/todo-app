import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import TasksList from "components/TasksList";
import FilterBar from "components/FilterBar";
import GlobalStyles from "theme/GlobalStyles";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: darkgreen;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <TasksList />
        <FilterBar />
      </Wrapper>
    </>
  );
};

export default App;
