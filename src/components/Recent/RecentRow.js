import React from "react";
import { AiFillCodeSandboxCircle, AiFillChrome } from "react-icons/ai";

function RecentRow({ value }) {
  return (
    <div className="flex justify-between w-full border h-[60px] px-2 items-center hover:bg-slate-300">
      <div className="flex items-center space-x-2">
        <AiFillCodeSandboxCircle />
        <p className="hover:text-blue-500 hover:underline cursor-pointer">
          {value.title}
        </p>
      </div>
      <div className="flex w-[40%] space-x-10 justify-between items-center">
        <p>
          {" "}
          {value.recent[0] +
            value.recent[1] +
            ":" +
            value.recent[2] +
            value.recent[3]}
        </p>
        <p>
          {value.first[0] +
            value.first[1] +
            ":" +
            value.first[2] +
            value.first[3]}
        </p>
        <AiFillChrome className="min-w-[15px]" />
      </div>
    </div>
  );
}

export default RecentRow;
