import React from "react";
import Link from "next/link";
import style from '../styles/login.module.css'

const Navbar = () => {
  return (
    <div>
      <div className={`${style.navbar} bg-dark`}>
        <div><Link href={'/'} className="btn text-light">Payments</Link></div>
        <div><Link href={'/'} className="btn text-light">Academics</Link></div>
        <div><Link href={'/'} className="btn text-light">Results</Link></div>
        <div><Link href={'/'} className="btn text-light">Calendar</Link></div>
      </div>
    </div>
  );
};

export default Navbar;
