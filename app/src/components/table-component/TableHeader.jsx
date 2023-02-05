import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead className="rounded-sm">
      <tr>
        {columns.map(({ label }, idx) => {
          return (
            <th
              className="[&:nth-child(3)]:rounded-tr-2xl bg-blue-sapphire py-6 text-left text-[#fff] "
              key={idx}
            >
              <p className="pl-6">{label}</p>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
