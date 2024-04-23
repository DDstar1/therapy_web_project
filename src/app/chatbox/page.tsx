import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="flex">
        <div className="px-3">
          <div>Admin List</div>
          <div className="bg-gray-300 rounded-md flex items-center">
            <div>John John</div>
            <div>
              <Image
                className="rounded-full"
                src="/dfc_logo.png"
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
        <div className="flex-grow relative pl-2">
          <div className="absolute text-center w-full">Admin Name</div>
          <div className=" pt-5"></div>
          <div>
            <span className="float-right">How are you</span>.
          </div>
          <div>
            <span className="float-left">Im fine</span>.
          </div>
          <div>
            <span className="float-right">
              {" "}
              I heard you could get advice here
            </span>
            .
          </div>
          <div>
            {" "}
            <span className="float-left">Of course, we are here for you</span>.
          </div>
          <div>
            {" "}
            <span className="float-right">
              I have being on abstainance, but its hard
            </span>
            .
          </div>
          <div>
            <span className="float-left">How long?</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
