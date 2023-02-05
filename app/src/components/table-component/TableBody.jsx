import React from "react";

const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }, idx) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return (
                <td className="p-6 border-t " key={idx}>
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
