import React, { useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = () => {
  const [tableData] = useState([
    { title: "Ibas", subTitle: "male", question: "tezt@test.com" },
    { title: "doe", subTitle: "male", question: "tezt@test.com" },
  ]);

  const columns = [
    { label: "Title", accessor: "title" },
    { label: "Sub Title", accessor: "subTitle" },
    { label: "Question", accessor: "question" },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-[#fff] border-collapse">
        <TableHeader columns={columns} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </div>
  );
};

export default Table;
