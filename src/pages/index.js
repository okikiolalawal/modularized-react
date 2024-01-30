import TestBackend from "@/pages/SignUp";
import Navbar from "@/components/Navbar";
import DashBoard from "./DashBoard";
import { useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementbyTwenty} from "../redux/reduxreducer"

export default function Home() {
  const globalState = useSelector((state)=>(state))
  let count = useSelector((state)=>(state.reduxreducer.count))
  const dispatch = useDispatch()
  return (
    <>
      <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementbyTwenty(20))}>Increment</button>
    </>
  );
}