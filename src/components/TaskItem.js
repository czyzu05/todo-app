import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import PropTypes from "prop-types";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";
import Paragraph from "./Paragraph";

const TaskItemWrapper = styled.div`
  height: 50px;
  border-bottom: 2px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskInfo = styled(Paragraph)`
  flex-basis: 25.1%;
  flex-grow: 1;
  text-align: center;
  font-size: 13px;

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

const InputWrapper = styled.div`
  flex-basis: 25.1%;
  flex-grow: 1;
  text-align: center;

  @media (min-width: 1200px) {
    input {
      width: 20px;
      height: 20px;
    }
  }
`;

const TrashTooltip = styled.i`
  cursor: pointer;
  font-size: 18px;
`;

const TaskItem = ({
  id,
  title,
  priority,
  done,
  changeTaskStatus,
  handleDeleteTask,
  task,
}) => {
  return (
    <TaskItemWrapper className="tooltip">
      <Tippy
        content={
          <Tippy
            content="Click for remove this task"
            placement="right"
            delay="200"
          >
            <button onClick={() => handleDeleteTask(task.id)}>
              <TrashTooltip className="fas fa-trash-alt"></TrashTooltip>
            </button>
          </Tippy>
        }
        interactive={true}
        theme="light"
        animation="scale"
      >
        <TaskInfo>{title}</TaskInfo>
      </Tippy>
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

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  changeTaskStatus: PropTypes.func,
  handleDeleteTask: PropTypes.func,
  task: PropTypes.object.isRequired,
};

export default TaskItem;
