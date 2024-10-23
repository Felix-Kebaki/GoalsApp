import React from "react";
import HeroImage from "../../assets/images/HeroImage.png";
import HeroImage2 from "../../assets/images/Image2Hero.jpg";
import Icon1 from "../../assets/images/Checkbox.svg";
import Icon2 from "../../assets/images/Stairs-Up.svg";
import Icon3 from "../../assets/images/Target.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./dDashboard.css";

export function DDashboard() {
  const navigate = useNavigate();

  const HandleCreateGoalDas = () => {
    navigate("/login");
  };
  return (
    <section className="DashboardMainSec">
      <div className="DashboardMainDiv">
        <div className="HeroAtDashMainDIv">
          <img src={HeroImage} alt="" />
          <div>
            <p id="mainTittleOnHero" className="TittleFonts">
              Track your progress...
            </p>
            <p className="MoreTextFont" id="DashboardMainDes">
              Create your goals today, and we'll help you track progress every
              step of the way on your journey to success!
            </p>
            <button
              id="CreateGoalBtn"
              className="TittleFonts"
              onClick={HandleCreateGoalDas}
            >
              Create goals
            </button>
          </div>
        </div>
        <div className="DifferentColorDivWrapper">
          <div className="FirstWrapper">
            <div className="FirstAtFirstWrapper">
              <img src={Icon3} alt="" />
            </div>
            <p className="TittleFonts">
              Keeping track of your goals has never felt easier
            </p>
            <div className="SecondAtFirstWrapper">
              <img src={Icon2} alt="" />
            </div>
          </div>
          <div className="SecondWrapper">
            <div className="FirstAtSecondWrapper">
              <img src={HeroImage2} alt="" />
            </div>
            <div className="SecondAtSecondWrapper">
              <div className="FirstAtFirstWrapper">
                <img src={Icon1} alt="" />
              </div>

              <p  className="TittleFonts">
                You’re capable of more than you think—set your goals and start
                achieving them today!
              </p>
              <div className="SecondAtFirstWrapper">
                <FontAwesomeIcon icon={faHourglassHalf} id="IconForImg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
