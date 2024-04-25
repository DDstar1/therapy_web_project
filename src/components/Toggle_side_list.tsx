"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Backdrop from "@/components/Backdrop";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

function Toggle_side_list() {
  const [adminOpen, setAdminOpen] = useState(true);

  const toggleAdminList = (index: any) => {
    setAdminOpen(!adminOpen);
  };

  return (
    <div className="fixed flex top-[48px] h-screen z-30">
      <div
        className={`overflow-hidden transform duration-[200ms] ${
          adminOpen ? "w-full" : "w-0"
        }`}
      >
        {" "}
        <Backdrop />
        <div className="px-3 relative border-r border-gray-300 h-full">
          <div className="text-center">Admin List</div>
          <div className="">
            <div className="bg-gray-300 rounded-md flex items-center text-center p-2">
              <div>John Jofhn</div>
              <div>
                <Image
                  className="rounded-full"
                  src="/dfc_logo2.png"
                  alt="Example Image"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div>John John</div>
            <div>John John</div>
            <div>John John</div>
            <div>John John</div>
          </div>
        </div>
      </div>
      <div
        className="self-center p-1 rounded-r-full bg-slate-50/75 md:hidden cursor-pointer relative h-fit "
        onClick={toggleAdminList}
      >
        {adminOpen ? (
          <MdOutlineKeyboardDoubleArrowLeft
            size={45}
            className="animate-bounce-side"
          />
        ) : (
          <MdOutlineKeyboardDoubleArrowRight
            size={45}
            className="animate-bounce-side"
          />
        )}
      </div>
    </div>
  );
}

export default Toggle_side_list;
