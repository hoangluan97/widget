import React, { useState } from "react";
import RecentRow from "./RecentRow";
import { BsFillTrashFill } from "react-icons/bs";
import Input from "../Input";
import { GenerateData } from "../../data/FakeData";

function RecentBox() {
  const data = GenerateData("recent");
  const [dataShow, setDataShow] = useState(data);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState(false);
  const [sortTypeOpen, setSortTypeOpen] = useState(false);

  const handleSortingRecent = () => {
    if (sortType === false) {
      const sortData = dataShow.sort((a, b) => a.recent - b.recent);
      setDataShow(sortData);
      setSortType(true);
    } else {
      const sortData = dataShow.sort((a, b) => b.recent - a.recent);
      setDataShow(sortData);
      setSortType(false);
    }
  };
  const handleSortingOpen = () => {
    if (sortTypeOpen === false) {
      const sortData = dataShow.sort((a, b) => a.first - b.first);
      setDataShow(sortData);
      setSortTypeOpen(true);
    } else {
      const sortData = dataShow.sort((a, b) => b.first - a.first);
      setDataShow(sortData);
      setSortTypeOpen(false);
    }
  };
  return (
    <div className="flex flex-col w-full min-h-[300px] space-y-7">
      <Input
        dataShow={dataShow}
        setDataShow={setDataShow}
        search={search}
        setSearch={setSearch}
        data={data}
      />{" "}
      <div className="flex justify-between w-full mb-3 px-2 text-[15px]">
        <p className="ml-7">Tiêu đề</p>
        <div className="flex justify-start w-[45%]">
          <div className="flex justify-between w-[100%] pr-4">
            <p
              onClick={handleSortingRecent}
              className="cursor-pointer text-left"
            >
              Mở lần gần đây nhất{" "}
            </p>
            <p onClick={handleSortingOpen} className="cursor-pointer">
              Được mở lần đầu
            </p>
            <BsFillTrashFill className="min-w-[15px]" />
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] overflow-y-auto  space-y-2">
        {dataShow.map((value, idx) => (
          <RecentRow value={value} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default RecentBox;
