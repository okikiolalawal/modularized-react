import React, { useEffect } from 'react'
import SecondNavbar from '../components/SecondNavbar'
import Link from 'next/link'
import ThirdNavBar from '../components/ThirdNavBar'
import style from '../styles/login.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'
const router = useRouter()
const DashBoard = () => {
  let url = "http://localhost:9000/user/dashBoard"
  let token =localStorage.token
 useEffect(()=>{
  axios.get(url,{
    headers:{
      "Authorization" : `Bearer ${token}`,
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    }
  }).then((response)=>{
    if(!response.data.status)
    {
      router.push("/login")
    }
  })
 })
  return (
    <div>
      <SecondNavbar></SecondNavbar>
      {/* <ThirdNavBar></ThirdNavBar> */}
      <div className={`${style.forgotpassword} bg-dark mb-5`}>
        <div className='p-1 mb-3'>
          <h4 className="p-1 text-white">Welcome Jafar Lawal</h4>
        </div>
        <div className='p-1 fs-5 text-white'>My Profile</div>
      </div>
      
      <div
        className={`mx-auto col-10 p-3 border rounded-3 bg-light mb-5 shadow-lg`}
      >
        <h5 className="text-center">Ward(s)'s List </h5>
        <h5 className="text-center">No Of students: 4 </h5>
        <div>
          <div className={`${style.forgotpassword} p-3`}>
            <div></div>
            <div>
              <button className="btn-success btn">Add Ward</button>
            </div>
          </div>
        </div>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jafar</td>
              <td>Lawal</td>
              <td>JSS1</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jamal</td>
              <td>Lawal</td>
              <td>JSS3</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jamiu</td>
              <td>Lawal</td>
              <td>SSS3</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ayyan</td>
              <td>Lawal</td>
              <td>SSS2</td>
              <td>
                <Link href={"/"} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="bg-light"></footer>
    </div>
  );
}

export default DashBoard