"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDehaze } from "react-icons/md";
import supabaseClient from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";

import { useUser } from "@/utils/store/user";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

function Nav_bar() {
  const [navOpen, setnavOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const updateUser = useUser((state) => state.updateUser);

  const user = useUser((state) => state.user);
  console.log("ascascasccsa", user);
  const router = useRouter();

  const toggleNavOpen = () => {
    setnavOpen(!navOpen);
  };

  const closeNav = () => {
    setnavOpen(false);
  };

  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    updateUser(undefined);
    // cookies().set("user_id", "");
    setCookie("user_id", undefined);

    router.push("/");
    router.refresh();

    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      console.log("User signed out successfully");
    }
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
          <Link onClick={closeNav} className="px-5 py-4 md:py-0" href="/">
            Welcome
          </Link>

          <Link
            onClick={closeNav}
            className="px-5 py-4 md:py-0"
            href="/chatbox"
          >
            Chat Box
          </Link>

          {user ? (
            <>
              <span className="px-5 py-4 md:py-0">{user.email}</span>
              <div className="px-5 py-4 md:py-0">
                <Button
                  onClick={() => {
                    closeNav();
                    handleSignOut();
                  }}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link
                onClick={closeNav}
                className="px-5 py-4 md:py-0"
                href="/login"
              >
                Login
              </Link>
              <Link
                onClick={closeNav}
                className="px-5 py-4 md:py-0"
                href="/register"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav_bar;
