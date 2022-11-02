import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeList, setActiveList] = useState(Array(5).fill(""));
  console.log(activeList);
  const handleOnclick = (index) => {
    setActiveList((prev) => {
      return prev.map((value, idx) => {
        if (idx === index) {
          return "text-red-500";
        } else return "";
      });
    });
  };
  return (
    <div className="w-full flex flex-col space-y-5 font-medium border-b-2 shadow-sm">
      <div className="flex w-full justify-between ">
        <div
          onClick={() => handleOnclick(0)}
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[0]}`}
        >
          <Link to={"/widget"}>
            <p>Ví dụ</p>
          </Link>
        </div>

        <div
          onClick={() => handleOnclick(1)}
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[1]}`}
        >
          <Link to={"/widget/recent"}>
            <p>Gần đây</p>
          </Link>
        </div>
        <div
          onClick={() => handleOnclick(2)}
          className={`flex justify-center no-wrap text-center w-[20%] h-full py-3 ${activeList[2]}`}
        >
          <Link to={"/widget/google"}>
            <p>Google Drive</p>
          </Link>
        </div>
        <div
          onClick={() => handleOnclick(3)}
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[3]}`}
        >
          <Link to={"/widget/github"}>
            <p>GitHub</p>
          </Link>
        </div>
        <div
          onClick={() => handleOnclick(4)}
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[4]}`}
        >
          <Link to={"/widget/upload"}>
            <p>Tải lên</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
