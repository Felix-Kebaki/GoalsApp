import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./emailvery.css";

export function EmailVery() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();
  return (
    <section className="VerifyEmailMainSec">
      <div className="VerifyEmailMainDiv">
        <p id="VerifyTitle">Verify Your Email</p>
        <p id="VerifySubTitle">Enter the 6-digit code sent to your email</p>
        <form className="VerifyInput">
          {code.map((digit, index) => (
            <input
              type="text"
              key={index}
              value={digit}
              ref={(el) => (inputRef.current[index] = el)}
              maxLength="6"
            />
          ))}
        </form>
      </div>
    </section>
  );
}
