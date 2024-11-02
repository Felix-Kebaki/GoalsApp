import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../src/features/Auth/AuthSlice'
import GoalReducer from '../src/features/goals/GoalSlice'

const store=configureStore({
    reducer:{
        auth:AuthReducer,
        goal:GoalReducer
    }
})

export default store