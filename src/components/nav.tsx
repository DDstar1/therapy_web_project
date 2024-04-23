import React from "react";
import Link from "next/link";
import Image from "next/image";
function Nav_bar() {
  return (
    <nav className="flex justify-between p-3 overflow-hidden fixed top-0 bg-gray-300 z-20 min-w-full">
      <Image src="/dfc_logo2.png" alt="Example Image" width={40} height={40} />
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
    </nav>
  );
}

export default Nav_bar;
