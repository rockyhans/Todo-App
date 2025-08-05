import { useState } from "react";
import API from "../api";

const TaskItem = ({ task, refresh }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    rating: task.rating,
  });

  const handleDelete = async () => {
    await API.delete(`/tasks/${task._id}`);
    refresh();
  };

  const handleUpdate = async () => {
    await API.put(`/tasks/${task._id}`, editedTask);
    setIsEditing(false);
    refresh();
  };

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 border border-gray-600 rounded shadow-sm flex flex-col gap-2 bg-slate-100 ">
      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="border rounded input"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="border rounded input"
          />
          <input
            type="number"
            name="rating"
            value={editedTask.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className="border rounded w-20 input"
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className=" bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className=" bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">Rating: {task.rating}/5</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-yellow-500 text-white  rounded hover:bg-yellow-700"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
