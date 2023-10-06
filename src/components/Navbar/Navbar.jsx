import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoSims from "../Atoms/LogoSims/LogoSims";

const links = [
  {
    link: "/top-up",
    title: "Top Up",
  },
  {
    link: "/transaction",
    title: "Transaksi",
  },
  {
    link: "/profile",
    title: "Akun",
  },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="border-b border-grey-primary ">
      <div className="navbar bg-base-100 px-28">
        <div className="flex-1">
          <Link to="/">
            <LogoSims />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex gap-8 px-1">
            {links.map((item, index) => (
              <li
                key={index}
                className={`${
                  currentPath === item.link ? "text-red-primary" : ""
                }`}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
