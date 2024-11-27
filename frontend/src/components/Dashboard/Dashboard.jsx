import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { GoalForm } from '../GoalForm/GoalForm'
import { Navbar } from '../Navbar/Navbar'
import { Goals } from '../AllGoals/Goals'
import {Footer} from '../Footer/Footer'

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
      <Navbar/>
      
      <GoalForm/>
      <Goals/>
      <Footer/>
     </section>

  )
}
