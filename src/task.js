import React from "react";

const Task = ({ task, handleCheckDoingTask }) => {
  const { id, content, status } = task;
  return (
    <div
      className={status ? "task-card completed-task" : "task-card doing-task"}
    >
      {status ? (
        <input
          type="checkbox"
          id={id}
          checked={status}
          onChange={handleCheckDoingTask}
        />
      ) : (
        <input
          type="checkbox"
          id={id}
          checked={status}
          onChange={handleCheckDoingTask}
        />
      )}

      <div className="task-content">{content}</div>
    </div>
  );
};

export default Task;
