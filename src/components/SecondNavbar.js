import React from "react";
import Link from "next/link";
import style from '../styles/login.module.css'

const Navbar = () => {
    return (
        <div>
          <div className={`${style.forgotpassword} bg-success p-3`}>
            <div className="nav-item">
              <Link href={"/"} className="nav-link text-light">
                <h5>Al-Hudah International College</h5>
              </Link>
            </div>
            
            <div className="nav-item">
              <Link href={"/login"} className="nav-link text-light">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      );
};

export default Navbar;
