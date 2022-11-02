import React from "react";
import { BsFilter } from "react-icons/bs";

function Input({ dataShow, setDataShow, search, setSearch, data }) {
  const handleOnchange = (e) => {
    setSearch(e.target.value);
    let searchResult = data.filter((value) => {
      return value.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setDataShow(searchResult);
  };
  return (
    <div className="w-[300px]">
      <form action="" className="relative">
        <input
          onChange={(e) => handleOnchange(e)}
          value={search}
          type="text"
          placeholder="Lọc sổ tay"
          className="w-full border-b-2 border-black focus:outline-none focus:border-blue-400"
        />
        <BsFilter className="absolute top-1 right-0" />
      </form>
    </div>
  );
}

export default Input;
