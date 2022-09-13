import React from "react";
import TaskList from "./taskList";

const CompletedTasks = ({ tasks, handleCheckDoingTask }) => {
  return (
    <div>
      <TaskList
        status={true}
        tasks={tasks}
        handleCheckDoingTask={handleCheckDoingTask}
      ></TaskList>
    </div>
  );
};

export default CompletedTasks;
