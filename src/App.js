import "./App.css";
import AddTask from "./addTask";
import CompletedTasks from "./completedTasks";
import TaskList from "./taskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [isClick, setIsClick] = useState(false);
  const handleCheckDoingTask = (task) => {
    const copyTasks = tasks;
    const index = tasks.indexOf(task);
    const newTask = {
      ...task,
      status: !task.status,
    };
    copyTasks.splice(index, 1, newTask);
    setTasks(copyTasks);
    localStorage.setItem("tasks", JSON.stringify(copyTasks));
    setIsClick((e) => !e);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>To do list</p>
      </header>
      <main>
        <div className="addTask">
          <AddTask tasks={tasks} setTasks={setTasks} />
        </div>
        <div className="doingTasks">
          <TaskList
            status={false}
            tasks={tasks}
            handleCheckDoingTask={handleCheckDoingTask}
          />
        </div>
        <div className="completedTasks">
          <CompletedTasks
            tasks={tasks}
            handleCheckDoingTask={handleCheckDoingTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
