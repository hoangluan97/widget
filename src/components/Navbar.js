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
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[0]}`}
        >
          <Link to={"/"}>
            <p onClick={() => handleOnclick(0)}>Ví dụ</p>
          </Link>
        </div>

        <div
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[1]}`}
        >
          <Link to={"/recent"}>
            <p onClick={() => handleOnclick(1)}>Gần đây</p>
          </Link>
        </div>
        <div
          className={`flex justify-center no-wrap text-center w-[20%] h-full py-3 ${activeList[2]}`}
        >
          <Link to={"/google"}>
            <p onClick={() => handleOnclick(2)}>Google Drive</p>
          </Link>
        </div>
        <div
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[3]}`}
        >
          <Link to={"/github"}>
            <p onClick={() => handleOnclick(3)}>GitHub</p>
          </Link>
        </div>
        <div
          className={`flex justify-center no-wrap w-[20%] h-full py-3 ${activeList[4]}`}
        >
          <Link to={"/upload"}>
            <p onClick={() => handleOnclick(4)}>Tải lên</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
