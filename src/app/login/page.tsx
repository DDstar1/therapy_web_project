"use client";

import React, { useState } from "react";
import supabaseClient from "@/utils/supabase/supabaseClient";
import { Button as UIButton } from "@nextui-org/button";
import bcrypt from "bcryptjs";
import { useUser } from "@/utils/store/user";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setCookie } from "cookies-next";

function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error2, setError2] = useState<any>(undefined);
  const router = useRouter();

  const updateUser = useUser((state) => state.updateUser);

  const handleChangeUsername = (e: any) => setUsername(e.target.value);
  const handleChangePassword = (e: any) => setPassword(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: `${username}@gmail.com`,
      password: password,
    });

    if (error) {
      console.error("Sign in error:", error.message);
      toast.error(`${error}`);
    } else {
      console.log("Sign in successful:", data.user);
      updateUser(data.user);
      setCookie("user_id", `${data.user.id}`);
      router.push("/chatbox");
    }
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form
        method="POST"
        className="flex fixed  flex-col"
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">
          <div className="w-20">Username:</div>{" "}
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChangeUsername}
          />
        </label>

        <label htmlFor="password">
          <div className="w-20">Password:</div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        {/* {error2 ? toast.error("Event has not been created") : <></>} */}
        <UIButton
          type="submit"
          className="my-4 bg-gradient-to-tr to-yellow-200 from-yellow-500 text-white shadow-lg text-lg"
        >
          Login
        </UIButton>
      </form>
    </div>
  );
}

export default Page;
