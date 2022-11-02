import React from "react";
import { AiFillCodeSandboxCircle, AiFillChrome } from "react-icons/ai";

function ContentRow({ content }) {
  return (
    <div className="flex justify-between w-full border-b-2 h-[60px] px-2 items-center hover:bg-slate-300">
      <div className="flex items-center space-x-2">
        <AiFillCodeSandboxCircle />
        <p className="hover:text-blue-500 hover:underline cursor-pointer">
          {content.title}
        </p>
      </div>
      <AiFillChrome />
    </div>
  );
}

export default ContentRow;
