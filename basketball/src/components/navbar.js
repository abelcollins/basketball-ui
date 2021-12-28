import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header class="header">
      <div class="left">
        <h2 >Basketball Navbar</h2>
      </div>
      <div class="mid">
        <ul class="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/park">Park</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div class="right">
        <h3>Welcome</h3>
      </div>
    </header>
  );
};
export default Navbar;
