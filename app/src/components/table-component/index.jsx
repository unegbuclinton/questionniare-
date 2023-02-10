import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = () => {
  const columns = [
    { label: "Title", accessor: "Title" },
    { label: "SubTitle", accessor: "Subtitle" },
    { label: "Question", accessor: "Question" },
  ];
  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full bg-[#fff] border-collapse rounded-bl-2xl rounded-tr-2xl">
        <TableHeader columns={columns} />
        <TableBody columns={columns} />
      </table>
    </div>
  );
};

export default Table;
