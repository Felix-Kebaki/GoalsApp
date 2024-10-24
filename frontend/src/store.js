import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../src/features/Auth/AuthSlice'

const store=configureStore({
    reducer:{
        auth:AuthReducer
    }
})

export default store