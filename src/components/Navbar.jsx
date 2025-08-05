import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-3 flex justify-between items-center  ">
      <h1 className="font-bold text-3xl   ">📝</h1>
      <div className="space-x-4">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn font-semibold ">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn font-semibold">
              <button>Login</button>
            </Link>
            <Link to="/signup" className="btn font-semibold">
              <button>Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
