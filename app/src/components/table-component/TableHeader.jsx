import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead className="rounded-lg">
      <tr>
        {columns.map(({ label, accessor }) => {
          return (
            <th
              className="bg-[#000F1F] py-6 text-left text-[#fff] "
              key={accessor}
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
