import React, { useState } from "react";
import Input from "../Input";
import ContentRow from "./ContentRow";
import { GenerateData } from "../../data/FakeData";

function ContentBox() {
  const data = GenerateData("example");
  const [dataShow, setDataShow] = useState(data);
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col w-full min-h-[300px] space-y-7">
      <Input
        dataShow={dataShow}
        setDataShow={setDataShow}
        search={search}
        setSearch={setSearch}
        data={data}
      />
      <p className="ml-7 w-full mb-3">Tiêu đề</p>
      <div className="w-full h-[300px] overflow-y-auto border space-y-2">
        {dataShow.map((value, index) => (
          <ContentRow content={value} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ContentBox;
