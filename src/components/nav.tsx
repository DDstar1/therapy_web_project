"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDehaze } from "react-icons/md";
import supabase from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";

function Nav_bar() {
  const [navOpen, setnavOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          setLoggedIn(true);
          setUsername(user.email || ""); // You can use other user properties like 'user.username'
        } else {
          setLoggedIn(false);
          setUsername(""); // You can use other user properties like 'user.username'
        }
      } catch (error: any) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, [setLoggedIn]);

  const toggleNavOpen = () => {
    setnavOpen(!navOpen);
  };

  const closeNav = () => {
    setnavOpen(false);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    // router.refresh();
    router.push("/");

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

          {loggedIn ? (
            <>
              <span className="px-5 py-4 md:py-0">{username}</span>
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
