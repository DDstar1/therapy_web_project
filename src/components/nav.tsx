import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDehaze } from "react-icons/md";

function Nav_bar() {
  return (
    <nav className="box-border z-40 flex justify-between p-2 overflow-hidden min-w-full fixed top-0 bg-gray-300 flex-grow">
      <Image src="/dfc_logo2.png" alt="Example Image" width={40} height={40} />
      <div className="flex">
        <MdOutlineDehaze size={30} />
        <div className="flex items-center">
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
        </div>
      </div>
    </nav>
  );
}

export default Nav_bar;
