import React from "react";
import { useSelector } from "react-redux";

const TableBody = ({ columns }) => {
  const { allQuestion } = useSelector((state) => state.questions);
  const questions = allQuestion?.questionnarieItems;
  return (
    <tbody>
      {questions?.map((data, idx) => {
        return (
          <tr key={idx}>
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
