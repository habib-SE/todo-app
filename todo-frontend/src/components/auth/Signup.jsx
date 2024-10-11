import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${window.location.origin}/api/v1/register`, formData);
      console.log("Signup Data:", response);
      navigate("/login", { state: { email: formData.email, password: formData.password } });
      setError(null); 
    } catch (error) {
      if (error.response) {
    
        setError(error.response.data.message || "An error occurred during signup");
      } else {

        setError("Unable to connect to the server");
      }
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card" style={{ width: '350px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Signup</h2>
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
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
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
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
