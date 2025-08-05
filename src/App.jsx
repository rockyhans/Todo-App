import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
    <div className="w-full flex align-center justify-center bg-slate-900 min-h-screen">
      <div className="w-full lg:w-1/2 bg-white">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
      </div>
    </>
  );
}

export default App;
