import React from "react";

const TableBody = ({ tableData, columns }) => {
  return (
    <tbody className="">
      {tableData.map((data) => {
        return (
          <tr className="" key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return (
                <td className="p-6 border-t " key={accessor}>
                  {tData}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
