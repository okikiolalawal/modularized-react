import {createSlice} from '@reduxjs/toolkit'

export const reduxreducer = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementbyTwenty: (state, action)=>{
      state.count += action.payload
    }
  },
});

export const {increment, incrementbyTwenty} = reduxreducer.actions
export const {decrement} = reduxreducer.actions
export default reduxreducer.reducer