import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

export  function Goals() {
    const {goals}=useSelector((state)=>state.goal.goals)
    console.log(goals)
  return (
    <section>
        <div>
            {/* {goals.map((goal)=>(
                <div>
                    <p>{goal.text}</p>
                </div>
            ))} */}
        </div>
    </section>
  )
}
