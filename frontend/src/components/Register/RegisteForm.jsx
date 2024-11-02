import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "../Spinner/Spinner";
import "./register.css";

//backend connectivity imports
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/Auth/AuthSlice";

export function RegisteForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;



  const OnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password don't match!!!");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="FormMainSec">
      <p id="FormMainTittle">
        <FontAwesomeIcon icon={faUser} /> Register
      </p>
      <p id="FormSubtittle">Please create an account</p>
      <div className="ActualFormDiv">
        <form onSubmit={HandleSubmitForm}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={OnChange}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={OnChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={OnChange}
            required
          />
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm password"
            value={password2}
            onChange={OnChange}
            required
          />

          <button type="submit" id="FormSubmitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
