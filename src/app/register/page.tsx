"use client";

import React, { useState } from "react";
import bcrypt from "bcryptjs";
import supabase from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@nextui-org/react";

function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function hashPassword(password: any) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
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
      const { data, error } = await supabase.auth.signUp({
        email: `${username}@gmail.com`, // Since Superbase requires an email, let's use a dummy email for now
        password: hashedPassword,
      });

      if (error) {
        throw error;
      }

      console.log("User registered successfully:", username);
      // router.refresh();
      router.push("/chatbox");
    } catch (error: any) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex fixed  flex-col">
        <label htmlFor="name">
          <div className="w-20 my-2"> Name:</div>
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

        <label className="fixed top-14 left-4 " htmlFor="admin">
          <input
            type="checkbox"
            name="admin"
            id="admin"
            checked={admin}
            onChange={(e) => setAdmin(e.target.checked)}
          />
        </label>

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
