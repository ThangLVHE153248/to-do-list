import React, { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [newContent, setNewContent] = useState("");
  const handleChangeInput = (e) => {
    setNewContent(e.target.value);
  };
  const addNewTask = () => {
    const newDoingTask = {
      id: tasks[tasks.length - 1]?.id + 1 || 1,
      content: newContent,
      status: false,
    };
    const newTasks = [...tasks, newDoingTask];
    setNewContent("");
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  return (
    <div>
      <input
        type="text"
        placeholder={newContent || "Add new tasks"}
        onChange={handleChangeInput}
      />
      <button onClick={addNewTask}>Add</button>
    </div>
  );
};

export default AddTask;
