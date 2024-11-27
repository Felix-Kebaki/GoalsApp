import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import GoalService from "./GoalService";

const initialState={
    goals:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:""
}


//create goal
export const Creategoal=createAsyncThunk("goals/create",async (goaldata,thunkAPI)=>{
    try {
        const token=thunkAPI.getState().auth.user.token
        return await GoalService.createGoal(goaldata,token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message); //message is the payload
      }
})


const goalSlice=createSlice({
    name:"goals",
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(Creategoal.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(Creategoal.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isSuccess=true,
            state.goals.push(action.payload)
        })
        .addCase(Creategoal.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.message=action.payload
        })
    }
})


export const {reset}=goalSlice.actions
export default goalSlice.reducer