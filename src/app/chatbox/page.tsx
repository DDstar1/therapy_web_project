import React from "react";
import Toggle_side_list from "@/components/Toggle_side_list";

function page() {
  return (
    <div>
      <div className="flex  min-h-screen">
        {/* <div className="fixed top-[48px] h-screen z-30">
          <Backdrop />
          <div className="px-3 relative border-r border-gray-300 h-full">
            <div className="text-center">Admin List</div>
            <div className="">
              <div className="bg-gray-300 rounded-md flex items-center text-center p-2">
                <div>John John</div>
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
        </div> */}
        <Toggle_side_list />
        <div className="flex flex-grow flex-col relative pl-2">
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
      </div>
    </div>
  );
}

export default page;
