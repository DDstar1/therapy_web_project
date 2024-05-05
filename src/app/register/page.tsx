"use client";

import React, { useState, useContext } from "react";
import bcrypt from "bcryptjs";
import supabaseClient from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useUser } from "@/utils/store/user";
// import { cookies } from "next/headers";
import { setCookie } from "cookies-next";
// import { UserContext } from "@/utils/context";

function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");
  const [cus_user_err, set_Cus_user_err] = useState("");
  const [loading_cus_user, set_loading_cus_user] = useState(false);
  const router = useRouter();

  const updateUser = useUser((state) => state.updateUser);

  async function hashPassword(password: any) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }

  const toggleAdmin = () => {
    setAdmin(!admin);
  };

  async function fill_cusUser_db(id: any, username: any, admin: boolean) {
    const { error }: any = await supabaseClient
      .from("cus_user")
      .insert({ id: id, username: username, admin: admin });
    if (error) {
      set_Cus_user_err(error);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (password !== password2) {
      setError("Passwords must match");
      return;
    }

    try {
      const hashedPassword = await hashPassword(password);

      // Register the user with Superbase
      const { data, error } = await supabaseClient.auth.signUp({
        email: `${username}@gmail.com`, // Since Superbase requires an email, let's use a dummy email for now
        // password: hashedPassword,
        password: password,
      });

      const userData: any = data?.user;

      updateUser(userData);
      setCookie("user_id", "authenticated");

      fill_cusUser_db(userData.id, username, admin ? true : false);

      console.log("User registered successfully:", userData);

      if (error) {
        throw error;
      }

      router.push("/chatbox");
    } catch (error: any) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex fixed  flex-col">
        {/* {`vsdvs ${JSON.stringify(cus_user_err)}`} */}
        <label htmlFor="name">
          <div className="flex justify-between items-center">
            <div className="w-20 my-2">Name:</div>
            {admin ? (
              <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></div>
            ) : (
              <></>
            )}
          </div>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <div className="w-20 my-2"> Password: </div>
          <input
            required
            type="password"
            minLength={6}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label htmlFor="password2">
          <div className="my-2">Confirm Password: </div>
          <input
            required
            type="password"
            minLength={6}
            name="password2"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </label>

        <div
          className="fixed top-12 left-0 w-12 h-12"
          onClick={toggleAdmin}
        ></div>

        <Button
          type="submit"
          className="my-4 bg-gradient-to-tr to-yellow-200 from-yellow-500 text-white shadow-lg text-lg"
        >
          Register
        </Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Page;
