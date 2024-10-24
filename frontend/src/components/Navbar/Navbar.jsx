import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, logout } from "../../features/Auth/AuthSlice";
import "./navbar.css";

export function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const HandleLogOutBtn = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header>
      <nav>
        <div className="LogoDiv">
          <Link to="/" className="logo">
            GoalSetter
          </Link>
        </div>
        <div className="LoginRegisterMainDiv">
          {user ? (
            <div className="LogOutDiv">
              <button onClick={HandleLogOutBtn}>Log out</button>
            </div>
          ) : (
            <ul className="LoginRegisterOnly">
              <li>
                <Link to="/register" className="MoreTextFont">
                  <FontAwesomeIcon icon={faUser} /> Sign In
                </Link>
              </li>
              <li>
                <Link to="/login" id="SignUpBtn" className="MoreTextFont">
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
