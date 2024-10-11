import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Todo from './components/todo/Todo';
import './App.css'
const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
