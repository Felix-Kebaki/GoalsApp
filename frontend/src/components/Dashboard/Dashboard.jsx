import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { GoalForm } from '../GoalForm/GoalForm'

export function DynamicDashboard() {
  const navigate=useNavigate()
  const {user}=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[user,navigate])
  return (
    <section> 
      Welcome {user.name}
      <GoalForm/>
     </section>

  )
}
