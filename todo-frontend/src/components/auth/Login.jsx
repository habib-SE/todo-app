
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store'; 

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();  
  const dispatch = useDispatch();  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state) {
      setFormData({
        email: location.state.email || '',
        password: location.state.password || ''
      });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${window.location.origin}/api/v1/login`, formData);
      if (response.data) {
        // localStorage.setItem("userData", JSON.stringify(response.data));
        const { email, _id } = response.data.user;
        localStorage.setItem("email", email);
        localStorage.setItem("userId", _id);
        dispatch(authActions.setIsLoggedIn({ isLoggedIn: true, user: response.data })); // Update Redux state
        dispatch(authActions.setUser(response.data));
        navigate("/"); // Navigate to the home page
        setError(null); // Clear any previous errors
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred during login");
      } else {
        setError("Unable to connect to the server");
      }
      console.error("Error during login:", error);
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card" style={{ width: '350px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" style={{ backgroundColor: "brown", color: "white" }} className="btn w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
