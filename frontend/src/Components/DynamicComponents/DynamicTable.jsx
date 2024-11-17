import React, { useState } from "react";
import "../pages.css";

export default function Table({ editRow, columnArr, dataArr, className, sortField, sortDirection}) {
  const getNestedValue = (obj, path) => {
    return (
      path.split(".").reduce((acc, part) => acc && acc[part], obj) || "N/A"
    );
  };

  const filteredDataArr = dataArr.filter((item) => !item.is_deleted);

  // function to only show items that is item.quantity > item.inventory.threshold, only works if called outside

  const [sortedField, setSortedField] = useState(sortField);
  const [sortedDirection, setSortedDirection] = useState(sortDirection);

  const handleSort = (field) => {
    if (sortedField === field) {
      setSortedDirection(sortedDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedField(field);
      setSortedDirection("asc");
    }
  };

  const sortedDataArr = sortedField
    ? [...filteredDataArr].sort((a, b) => {
        const column = columnArr.find(
          (col) => col.row === sortedField || col.customRender
        );
        const aValue = column.customRender
          ? getNestedValue(a, sortedField)
          : getNestedValue(a, sortedField);
        const bValue = column.customRender
          ? getNestedValue(b, sortedField)
          : getNestedValue(b, sortedField);

        if (aValue < bValue) {
          return sortedDirection === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortedDirection === "asc" ? 1 : -1;
        }
        return 0;
      })
    : filteredDataArr;

  return (
    <section className={`h-full`}>
      <div
        className={`overflow-y-auto shadow-shadowTable max-h-[61vh] mt-4 mr-6 rounded-lg ${className}`}
      >
        <div>
          <table className={`border-collapse min-w-full`}>
            <thead
              className={`bg-red-600 p-4 m-10 text-left text-white top-0 z-0 sticky`}
            >
              <tr>
                {columnArr.map((item, index) => {
                  return (
                    <th
                      key={index}
                      className={`p-3 hover:bg-red-700 transition-all duration-100`}
                    >
                      <button
                        type="button"
                        onClick={() => handleSort(item.row)}
                      >
                        {item.header}
                        {sortedField === item.row &&
                          (sortedDirection === "asc" ? " ▲" : " ▼")}
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {sortedDataArr.length > 0 ? (
                sortedDataArr.map((item, index) => {
                  return (
                    <tr
                      onClick={() => editRow(item.id)}
                      className={` bg-gray-50 hover:bg-red-700 hover:border-red-800 hover:text-white border-b-2 border-gray-200 transition-all duration-75 ease-in cursor-pointer`}
                      key={item.id}
                    >
                      {columnArr.map((header, i) => (
                        <td key={i} className={`p-4`}>
                          {header.customRender
                            ? header.customRender(item)
                            : header.row.includes(".")
                            ? getNestedValue(item, header.row)
                            : item[header.row] ?? "N/A"}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={columnArr.length} className={`p-4 text-center`}>
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
