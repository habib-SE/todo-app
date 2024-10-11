import React from "react";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center vh-100">
      <div className="container d-flex justify-content-center align-items-center text-center ">
        <div className=" flex-column">
          <h1>
            Organize your <br /> work and life, finally.
          </h1>
          <p>
            Because focused, organized, and calm with <br /> todo app. The
            world's #1 task manager app.
          </p>
          <div className=" text-center mt-2">
            <Link to="/todo">
              <button
                className="text-center p-2 rounded-pill"
                style={{ backgroundColor: "brown", color: "white" }}
              >
                Make todo list
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
