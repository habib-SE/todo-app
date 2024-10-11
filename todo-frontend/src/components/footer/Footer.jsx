import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6"; // Import social media icons
import "./Footer.css"; // Assuming custom styles in Footer.css

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-4">
            <h5 className="mb-3">Todo App</h5>
            <p>Your one-stop solution to manage tasks and boost productivity.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/" className="text-white">About Us</a></li>
              <li><a href="/" className="text-white">Features</a></li>
              <li><a href="/" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">© {new Date().getFullYear()} Todo App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
