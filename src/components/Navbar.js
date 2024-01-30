import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="nav border-bottom border-2 p-3">
        <li className="nav-item">
          <Link href={"/"} className="nav-link text-success">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/SignIn"} className="nav-link text-success">
            sign in
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/FundAccount"} className="nav-link text-success">
            Fund Account
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/"} className="nav-link text-success">
            Update Info
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/login"} className="nav-link text-success">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
