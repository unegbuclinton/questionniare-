import React from "react";
import { useSelector } from "react-redux";

const TableBody = ({ tableData, columns }) => {
  const { allQuestion } = useSelector((state) => state.questions);
  return (
    <tbody>
      {allQuestion.map((data) => {
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
