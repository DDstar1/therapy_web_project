import React from "react";
// import { FiAlignJustify } from "react-icons/fi";
// <FiAlignJustify />

function Page() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form className="flex fixed  flex-col">
        <label htmlFor="name">
          <div className="w-20"> Name:</div>{" "}
          <input type="text" name="name" id="name" />
        </label>

        <label htmlFor="password">
          <div className="w-20"> Password: </div>
          <input type="password" name="password" id="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Page;
