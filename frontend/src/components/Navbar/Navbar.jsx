import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <header>
      <nav>
        <div className="LogoDiv">
          <Link to="/" className="logo">GoalSetter</Link>
        </div>
        <div className="LoginRegisterMainDiv">
          {isLogIn ? (
            <div className="LogOutDiv">
              <button>Log out</button>
            </div>
          ) : (
            <ul className="LoginRegisterOnly">
              <li>
                <Link to="/register">Sign In</Link>
              </li>
              <li>
                <Link to="/login" id="SignUpBtn">Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="MenuDiv">
          <p>Menu</p>
        </div>
      </nav>
    </header>
  );
}
