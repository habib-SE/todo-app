import React from "react";
import "./About.css"; // Assuming you add custom styles in About.css

const About = () => {
  return (
    <div className="about-page py-5">
      <div className="container">
        <h1 className="text-center mb-4">About Todo App</h1>
        <p className="lead text-center mb-5">
          Welcome to the Todo App, your ultimate tool for managing tasks, improving productivity, and staying organized. Whether you need to track daily activities or long-term projects, we've got you covered.
        </p>

        {/* Features Section */}
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Task Management</h5>
                <p className="card-text">
                  Easily create, edit, and organize your tasks. Prioritize your most important tasks and mark them as complete.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Productivity Tools</h5>
                <p className="card-text">
                  Boost your productivity with reminders, deadlines, and progress tracking. Stay on top of your tasks with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">User Friendly</h5>
                <p className="card-text">
                  Simple and intuitive interface designed to help you focus on getting things done, without the clutter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-5 text-center">
          <h2>Our Mission</h2>
          <p className="lead">
            Our mission is to provide an easy-to-use and powerful task management tool for individuals and teams, helping them stay organized and productive every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
