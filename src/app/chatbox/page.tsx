import React from "react";

function page() {
  return (
    <div>
      <div className="flex">
        <div>
          <div>Admin List</div>
          <div>John John</div>
          <div>John John</div>
          <div>John John</div>
          <div>John John</div>
          <div>John John</div>
        </div>
        <div className="flex-grow relative pl-2">
          <div className="absolute text-center">Admin Name</div>
          <div className=" pt-5"></div>
          <div>
            <span className="float-right">How are you</span>.
          </div>
          <div>
            <span className="float-left">Im fine</span>.
          </div>
          <div>
            <span className="float-right"> I want to go to heaven</span>.
          </div>
          <div>
            {" "}
            <span className="float-left">Then go</span>.
          </div>
          <div>
            {" "}
            <span className="float-right">Do you think a rope is ok</span>.
          </div>
          <div>
            <span className="float-left">Make it an accident</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
