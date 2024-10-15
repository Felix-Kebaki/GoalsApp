import React from 'react'
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import '../Register/register.css'

export function LoginForm() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
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
        <p id='FormMainTittle'><FontAwesomeIcon icon={faRightToBracket} /> Login</p>
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
  
            <button type="submit" id='FormSubmitBtn'>Submit</button>
          </form>
        </div>
      </section>
  )
}
