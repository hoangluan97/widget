import React, { useState } from "react";
import GoogleRow from "./GoogleRow";
import Input from "../Input";
import { GenerateData } from "../../data/FakeData";

function GoogleBox() {
  const data = GenerateData("google");
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
      />
      <div className="flex justify-between w-full mb-3 px-2 text-[15px]">
        <p className="ml-7">Tiêu đề</p>
        <div className="flex justify-start w-[50%]">
          <div className="flex justify-between w-[80%] pr-4">
            <p className=" text-left">Chủ sở hữu</p>
            <p
              onClick={handleSortingRecent}
              className="cursor-pointer text-center"
            >
              Mở lần gần đây nhất{" "}
            </p>
            <p
              onClick={handleSortingOpen}
              className="cursor-pointer text-right"
            >
              Được mở lần đầu
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[300px] overflow-y-auto space-y-2">
        {dataShow.map((value, idx) => (
          <GoogleRow value={value} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default GoogleBox;
