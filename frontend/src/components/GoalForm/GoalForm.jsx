import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export function GoalForm() {
    const dispatch=useDispatch()
    const [text,setText]=useState('')
    const HandleSubmitGoals=(e)=>{
        e.preventDefault()
        dispatch(Creategoal({text}))
        setText("")
    }
  return (
    <div>
        <form onSubmit={HandleSubmitGoals}>
            <div>
            <label htmlFor="goalId">Goal</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id="goalId" name="text" placeholder='create goal'/>
            </div>
            <div>
                <button type='submit'>Add Goal</button>
            </div>
        </form>
    </div>
  )
}
