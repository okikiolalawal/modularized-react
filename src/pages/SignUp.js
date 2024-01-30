import React from 'react'
import { useRouter } from 'next/router'
import style from '../styles/login.module.css'
import { useFormik } from 'formik'
import * as yup from "yup"

const SignUp = () => {
  const formik = useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:""
    },
    onSubmit : (values)=>
    {
      console.log(values);
    },
    validationSchema:yup.object({
      firstname : yup.string().required("This field is required").min(4,"Must be greater than 5"),
      lastname : yup.string().required("This field is required").min(5,"Must be greater than 5"),
      email : yup.string().required("This field is required").email("Please enter a valid email"),
      password : yup.string().required("This field is required")
    })
  })
  console.log(formik.errors)
    
  const router = useRouter();
   
  return (
    <>
      <div className={`${style.body} bg-success`}>
        <div className={`${style.background} `}>
          <div className="border rounded-3 p-3 col-8 mx-auto bg-light">
            <h1 className="text-center border-bottom text-success p-3">
              Sign Up
            </h1>
            <form action="" onSubmit={formik.handleSubmit}>
              <div className="d-flex mx-auto p-2">
                <div className="mb-1 p-1 col-6">
                  <label className="form-label">First Name</label>
                  <input
                    placeholder="First Name"
                    type="text"
                    className={formik.touched.firstname && formik.errors.firstname?"form-control is-invalid":"form-control my-2"}
                    name="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                    onBlur={formik.handleBlur}
                  ></input>
                  <div>
                  <small className='text-danger mb-1 p-3'>
                    {formik.touched.firstname && formik.errors.firstname}
                  </small>
                </div>
                </div>
                
                <div className="mb-1 p-1 col-6">
                  <label className="form-label">Last Name</label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    className={formik.touched.lastname && formik.errors.lastname?"form-control is-invalid":"form-control my-2"}
                    name="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    onBlur={formik.handleBlur}
                  ></input>
                  <div>
                  <small className='text-danger mb-1 p-3'>
                    {formik.touched.lastname && formik.errors.lastname}
                  </small>
                </div>
                </div>
              </div>
              
              <div className="d-flex mx-auto p-2">
                <div className="mb-1 p-1 col-6">
                  <label className="form-label">Email</label>
                  <input
                    placeholder="Email"
                    type="text"
                    className={formik.touched.email && formik.errors.email?"form-control is-invalid":"form-control my-2"}
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  ></input>
                  <div>
                  <small className='text-danger mb-1 p-3'>
                    {formik.touched.email && formik.errors.email}
                  </small>
                </div>
                </div>
                <div className="mb-1 p-1 col-6">
                  <label className="form-label">Password</label>
                  <input
                    placeholder="Password"
                    type="text"
                    className={formik.touched.password && formik.errors.password?"form-control is-invalid":"form-control my-2"}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  ></input>
                  <div>
                  <small className='text-danger mb-1 p-3'>
                    {formik.touched.password && formik.errors.password}
                  </small>
                </div>
                </div>
              </div>
              <div className="mb-1 p-2 mx-auto ">
                <button
                  type="button"
                  className="btn-success form-control btn text-light"
                >
                  Sign Up
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
}

export default SignUp