import React from "react";
import Task from "./task";

const TaskList = ({ status, tasks, handleCheckDoingTask }) => {
  const displayedTasks = status
    ? tasks.filter((task) => task.status)
    : tasks.filter((task) => !task.status);
  return (
    <div>
      {displayedTasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleCheckDoingTask={() => handleCheckDoingTask(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
