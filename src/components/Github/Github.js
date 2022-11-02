import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Github() {
  return (
    <div className="w-full flex flex-col space-y-6 min-h-[300px]">
      <div className="flex w-full justify-between mt-5">
        <p>Nhập một URL GitHub hoặc tìm theo tổ chức hoặc người dùng</p>
        <div className="flex">
          <input type="checkbox" name="" id="" />
          <p>Bao gồm các kho lưu trữ riêng tư</p>
        </div>
      </div>
      <div className="w-full relative flex justify-center">
        <input
          type="text"
          name=""
          id=""
          className="w-[92%] border-b-2 focus:border-blue-400 border-black focus:outline-none"
        />
        <AiOutlineSearch className="absolute top-0 right-2" />
      </div>
      <div className="w-full flex justify-center mt-5">
        <p>Không có kết quả</p>
      </div>
    </div>
  );
}

export default Github;
