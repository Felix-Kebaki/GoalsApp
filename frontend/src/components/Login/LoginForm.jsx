import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "../Register/register.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { reset, login } from "../../features/Auth/AuthSlice";
import { useNavigate ,Link} from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import BackgroundImage from '../../assets/images/registerBg.png'



export function LoginForm() {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isSuccess, isError, dispatch, navigate]);

  const OnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
    setFormData({
      email: "",
      password: "",
    });
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="FormMainSec">
      <div className="BackgroundImageDiv">
        <img src={BackgroundImage} alt="" />
      </div>
      <div className="FormMainDiv">
        <p id="FormMainTittle">
          <FontAwesomeIcon icon={faRightToBracket} /> Login
        </p>
        <p id="FormSubtittle">Login to set your goals</p>
        <div className="ActualFormDiv">
          <form onSubmit={HandleSubmitForm}>
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
            <Link to="/" style={{textDecoration:"none",color:"#3EB489"}}>forgot password?</Link>

            <button type="submit" id="FormSubmitBtn">
              Submit
            </button>
            <div className="SwitchingFormsDiv">
            <p>You don't have an account? <Link to="/register">register</Link></p>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}
