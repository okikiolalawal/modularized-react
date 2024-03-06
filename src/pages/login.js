import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import style from "../styles/login.module.css";
import { useFormik } from "formik";

const login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  // const [email, setEmail]= useState("")
  // const [password, setPassword]= useState("")

  const router = useRouter();
  const LoginUser = () => {
    const dataobj = { email, password };
    console.log(dataobj);
    axios.post("http://localhost:9000/user/login", dataobj).then((response) => {
      console.log(response);
      if (response.data.status) {
        localStorage.token = response.data.token;
        router.push("DashBoard");
      }
    });
  };
  return (
    <>
      <Navbar />
      <div className={`${style.body} bg-success`}>
        <div className={`${style.background} `}>
          <div className="border rounded-3 p-3 col-8 mx-auto bg-light">
            <h1 className="text-center border-bottom text-success p-3">
              Login
            </h1>
            <form>
              <div className="mb-1 p-3">
                <label className="form-label">Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  className="form-control"
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  name="email"
                ></input>
              </div>
              <div className="mb-1 p-3">
                <label className="form-label">Password</label>
                <input
                  placeholder="Password"
                  type="text"
                  className="form-control"
                  //
                  name="password"
                ></input>
              </div>
              <div className="mb-1 p-3">
                <button
                  type="button"
                  onClick={LoginUser}
                  className="btn-success form-control btn text-light"
                >
                  Login
                </button>
              </div>
              <div className={`${style.forgotpassword}  p-4`}>
                <div>
                  <small>
                    If you dont have an account yet{" "}
                    <a className="text-primary">Sign Up here</a>{" "}
                  </small>
                </div>
                <div>
                  <small>
                    <a className="text-primary">Forgot Password</a>
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
