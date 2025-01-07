import React from "react";

interface TableProps {
  headers: string[];
  rows: Array<Array<string>>;
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th
                key={index}
                className="text-left py-2 px-4 border-b border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-2 px-4 border-b border-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
