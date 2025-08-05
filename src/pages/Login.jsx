import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6  ">
      <div className="bg-white p-6 rounded-lg  ">
        <h1 className="text-2xl font-bold mb-4 text-green-600 text-center">
          Welcome!
        </h1>
        <p className="mb-4 text-gray-700">
          A powerful full-stack task management application designed to simplify
          your daily planning with secure authentication and rich task handling
          features.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Secure User Authentication
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Sign up or log in using your email and password.</li>
          <li>
            Your credentials are safely protected with industry-standard{" "}
            <b>bcrypt</b> hashing.
          </li>
          <li>
            <b>JWT-based sessions</b> ensure secure and seamless login sessions.
          </li>
        </ul>
      </div>
      {/* 🔐 Login Form */}
      <div className="w-full flex  align-center justify-evenly ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-lg shadow flex flex-col items-center space-y-4  w-3/4 "
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login to Continue
          </h2>
          <input
            type="email"
            placeholder="Email"
            required
            className="w-3/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-3/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <div className="w-3/5">
            <button className="btn bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg  ">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Task Management
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>
            Create new tasks by adding a title, description, and rating (1 to
            5).
          </li>
          <li> Update your tasks easily after progress or completion.</li>
          <li>Delete tasks with just one click when no longer needed.</li>
          <li> Rate your tasks to prioritize or reflect importance.</li>
        </ul>

        <p className="text-gray-700 text-center ">
          All task-related features are exclusively available to{" "}
          <b>logged-in users</b>.<br />
        </p>
      </div>
    </div>
  );
};

export default Login;
