import React from "react";
import { Link } from "react-router-dom";
import LogoSims from "../Atoms/LogoSims/LogoSims";

const Navbar = () => {
  return (
    <div className="border-b border-grey-primary ">
      <div className="navbar bg-base-100 px-28">
        <Link to="/" className="flex-1">
          <LogoSims />
        </Link>
        <div className="flex-none">
          <ul className="flex gap-8 px-1">
            <li>
              <Link to="/top-up">Top Up</Link>
            </li>
            <li>
              <Link to="/transaction">Transaction</Link>
            </li>
            <li>
              <Link to="/profile">Akun</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
