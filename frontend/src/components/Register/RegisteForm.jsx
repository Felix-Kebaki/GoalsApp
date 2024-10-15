import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './register.css'

export function RegisteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const OnChange=(e)=>{
    setFormData((prev)=> ({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }

  const HandleSubmitForm=(e)=>{
    e.preventDefault()
  }
  return (
    <section className="FormMainSec">
      <p id='FormMainTittle'><FontAwesomeIcon icon={faUser} /> Register</p>
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

          <button type="submit" id='FormSubmitBtn'>Submit</button>
        </form>
      </div>
    </section>
  );
}
