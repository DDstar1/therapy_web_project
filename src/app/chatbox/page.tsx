import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="flex">
        <div className="px-3">
          <div className="text-center">Admin List</div>
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
        <div className="flex flex-col relative pl-2">
          <div className="absolute text-center w-full">Admin Name</div>
          <div className=" pt-5"></div>
          <div className="mine_msg">How are you svsdv sbs sdvs ewv sdv</div>
          <div className="their_msg">Im fine</div>

          <div>
            <span className=""> I heard you could get advice here</span>.
          </div>
          <div>
            {" "}
            <span className="">Of course, we are here for you</span>.
          </div>
          <div>
            {" "}
            <span className="">I have being on abstainance, but its hard</span>.
          </div>
          <div>
            <span className="">How long?</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
