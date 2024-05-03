"use client";
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext<any>({
  user: "",
  setUser: () => {},
});

export function UserProvider({ children }: any) {
  const [user, setUser] = useState("");
  // alert(user);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
