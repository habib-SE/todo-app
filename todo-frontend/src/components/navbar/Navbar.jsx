
import React, { useEffect } from "react";
import { FaBook } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    dispatch(authActions.logout());
    navigate("/login");
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
console.log("storeData",storedUserData);

    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        if (parsedData) {
          dispatch(authActions.setUser(parsedData));
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
      }
    }
  }, [dispatch]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link style={{ color:"brown"}} className="navbar-brand" to="/">
            <b >
              <FaBook /> &nbsp; todo
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-4" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/about" className="nav-link active">About Us</Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/todo" className="nav-link active">todo</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/signup"
                      className="nav-link active btn-nav me-2"
                      style={{ backgroundColor: "brown", color: "white" }}
                    >
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link active btn-nav me-2"
                      style={{ backgroundColor: "brown", color: "white" }}
                    >
                      SignIn
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="nav-link active btn-nav"
                    style={{ backgroundColor: "brown", color: "white" }}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
