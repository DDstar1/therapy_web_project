import React from "react";
import Toggle_side_list from "@/components/Toggle_side_list";
import { GrSend } from "react-icons/gr";
import supabaseClient from "@/utils/supabase/supabaseClient";

export const revalidate = 0;

async function page() {
  // let cus_user: any = [];

  const { data: cus_user, error }: any = await supabaseClient
    .from("cus_user")
    .select("*")
    .eq("admin", true);
  return (
    <div>
      <div className="flex  min-h-screen">
        <Toggle_side_list admins={cus_user} />
        <div className="flex flex-grow flex-col justify-between">
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
          <form className="flex w-full justify-center fixed bottom-0 ">
            <input
              className="border-black border-2 p-2 m-1"
              type="text"
              name="mesage"
              id="mesage"
              placeholder="Send Message"
            />{" "}
            <button>
              <GrSend size={25} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
