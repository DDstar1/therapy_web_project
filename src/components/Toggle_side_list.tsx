"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Backdrop from "@/components/Backdrop";
import { useReceiver, useMesssages, useUser } from "@/utils/store/user";

import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import supabaseClient from "@/utils/supabase/supabaseClient";

function Toggle_side_list({ admins }: { admins: any[] }) {
  const [adminOpen, setAdminOpen] = useState(true);
  const updateReceiver = useReceiver((state) => state.updateReceiver);
  const receiver = useReceiver((state) => state.receiver);
  const updateMessages = useMesssages((state) => state.updateMessages);
  const user = useUser((state) => state.user);

  console.log("chatlist_user", user);

  const toggleAdminList = () => {
    setAdminOpen(!adminOpen);
    console.log("dsdsd", admins);
  };

  const getMessages = async () => {
    const { data: message_list, error: error2 }: any = await supabaseClient
      .from("Messages")
      .select("*")
      .eq("sender_id", user?.id)
      .eq("receiver_id", receiver);
    console.log("message_list", message_list);
    console.log("error2", error2);
    updateMessages(message_list);
  };

  return (
    <div className="fixed md:sticky flex top-[48px] h-screen z-30">
      <div
        className={`overflow-hidden transform duration-300 ${
          adminOpen ? "w-full" : "w-0"
        }`}
      >
        <Backdrop />
        <div className="px-3 relative border-r border-gray-300 h-full">
          <div className="text-center">Admin List</div>
          <div className="">
            {admins.map((admin: any, index: number) => (
              <div
                key={index}
                className="bg-gray-300 rounded-md flex items-center justify-between text-center p-2 my-2"
                onClick={() => {
                  updateReceiver(admin.id);
                  getMessages();
                }}
              >
                <div>{admin.username}</div>
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
            ))}
          </div>
        </div>
      </div>
      <div
        className="self-center p-1 rounded-r-full bg-slate-50/75 md:hidden cursor-pointer relative h-fit"
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
