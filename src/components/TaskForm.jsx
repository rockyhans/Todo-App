import { useState } from "react";
import API from "../api";

const TaskForm = ({ refresh }) => {
  const [form, setForm] = useState({ title: "", description: "", rating: 3 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/tasks", form);
    setForm({ title: "", description: "", rating: 3 });
    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-400 p-4 rounded-lg shadow flex flex-col items-center space-y-4  w-full "
    >
      <h2 className="text-2xl text-black font-semibold">Add Task</h2>
      <input
        type="text"
        required
        placeholder="Title"
        className="input"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        required
        placeholder="Description"
        className="input"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="number"
        min="1"
        max="5"
        className="input"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
      />
      <div className="w-full">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
