import { useEffect, useState } from "react";
import API from "../api";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-3 ">
      <TaskForm refresh={fetchTasks} />
      <div className="mt-6 space-y-4 h-96 overflow-auto p-1 scrollbar-hide">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} refresh={fetchTasks} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
