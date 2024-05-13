"use client";

import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import supabaseClient from "@/utils/supabase/supabaseClient";
import { getCookie } from "cookies-next";
import { useReceiver, useUser } from "@/utils/store/user";
import { toast } from "sonner";

function SendMessageForm({ sender_id }: any) {
  const receiver_id = useReceiver((state) => state.receiver);
  const [message_list, setMessage_list] = useState([]);

  const handleSubmit = async (event: any) => {
    alert("sdvsd");
    event.preventDefault();

    const formData = new FormData(event.target);
    const user_id = getCookie("user_id");
    const receiver_id = formData.get("receiver_id");
    const message = formData.get("message");

    try {
      // Insert the message into the database

      const { data, error } = await supabaseClient
        .from("Messages")
        .insert([
          { sender_id: user_id, receiver_id: receiver_id, message: message },
        ])
        .select();

      if (error) {
        toast.error(error.details);
        alert(error.details);
        console.log(error);
        throw error;
      } else {
        toast.success("Message sent successfully");
      }

      // Redirect to a success page or do something else
    } catch (error: any) {
      console.error("Error inserting message:", error.message);
      // Handle error, show error message, etc.
    }
  };

  const getMessageList = async () => {
    console.log(sender_id);
    const { data: message_list, error: error2 }: any = await supabaseClient
      .from("Messages")
      .select("*")
      .eq("sender_id", sender_id)
      .eq("receiver_id", receiver_id);

    setMessage_list(message_list);
  };

  getMessageList();

  return receiver_id ? (
    <>
      <div className="flex flex-col relative pl-2 w-full">
        <div className="absolute text-center w-full">Admin Name</div>
        <div className=" pt-5"></div>
        <div className="mine_msg">How are you svsdv sbs sdvs ewv sdv</div>
        <div className="their_msg">Im fine</div>

        <div className="mine_msg">I heard you could get advice here</div>
        <div className="their_msg">Of course, we are here for you</div>
        <div className="mine_msg">
          I have being on abstainance, but its hard
        </div>
        <div className="their_msg">How long?</div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-center fixed bottom-0 "
      >
        <input type="text" name="user_id" value={sender_id} hidden />
        <input type="text" name="receiver_id" value={receiver_id} hidden />
        <input
          className="border-black border-2 p-2 m-1"
          type="text"
          name="message"
          id="message"
          placeholder="Send Message"
        />
        <button type="submit">
          <GrSend size={25} />
        </button>
      </form>
    </>
  ) : (
    <></>
  );
}

export default SendMessageForm;
