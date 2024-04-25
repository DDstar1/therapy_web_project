"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDehaze } from "react-icons/md";

function Nav_bar() {
  const [navOpen, setnavOpen] = useState(true);

  const toggleNavOpen = (index: any) => {
    setnavOpen(!navOpen);
  };
  return (
    <nav className="box-border z-40 flex justify-between p-2 overflow-hidden min-w-full fixed top-0 bg-gray-300 flex-grow">
      <Image src="/dfc_logo2.png" alt="Example Image" width={40} height={40} />
      <div className="flex flex-col justify-center">
        <div
          className="self-center  md:hidden cursor-pointer "
          onClick={toggleNavOpen}
        >
          <MdOutlineDehaze size={30} />
        </div>

        <div
          className={`flex fixed top-12 md:relative md:top-0 right-0 flex-col md:flex-row items-center bg-gray-300 transform duration-[200ms] h-fit overflow-hidden transition-all ${
            navOpen ? "max-h-72" : "max-h-0"
          }`}
        >
          <Link className="px-5 py-4 md:py-0" href="/">
            Welcome
          </Link>

          <Link className="px-5 py-4 md:py-0" href="/chatbox">
            Chat Box
          </Link>

          <Link className="px-5 py-4 md:py-0" href="/login">
            Login
          </Link>
          <Link className="px-5 py-4 md:py-0" href="/register">
            Register
          </Link>
        </div>

        {/* <div className="flex items-center">
          <Link className="px-5" href="/">
            Welcome
          </Link>

          <Link className="px-5" href="/chatbox">
            Chat Box
          </Link>

          <Link className="px-5" href="/login">
            Login
          </Link>
          <Link className="px-5" href="/register">
            Register
          </Link>
        </div> */}
      </div>
    </nav>
  );
}

export default Nav_bar;
