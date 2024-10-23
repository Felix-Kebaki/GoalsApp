import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
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
                <Link to="/register" className='MoreTextFont' ><FontAwesomeIcon icon={faUser} />  Sign In</Link>
              </li>
              <li>
                <Link to="/login" id="SignUpBtn" className='MoreTextFont' >Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
