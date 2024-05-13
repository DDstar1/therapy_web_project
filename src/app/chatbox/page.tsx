import React from "react";
import Toggle_side_list from "@/components/Toggle_side_list";
import supabaseClient from "@/utils/supabase/supabaseClient";
import SendMessageForm from "@/components/SendMessageForm";
import { getCookie, getCookies, setCookie } from "cookies-next";
import { cookies } from "next/headers";

export const revalidate = 0;

async function page() {
  let user_id = cookies().get("user_id")?.value;
  console.log(user_id, "the user");

  const { data: cus_user, error: error1 }: any = await supabaseClient
    .from("cus_user")
    .select("*")
    .eq("admin", true);

  return (
    <div>
      <div className="flex  min-h-screen">
        <Toggle_side_list admins={cus_user} />
        <div className="flex flex-grow flex-col justify-between">
          <SendMessageForm sender_id={user_id} receiver_id={"dsvs"} />
        </div>
      </div>
    </div>
  );
}

export default page;
