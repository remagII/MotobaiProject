import React, { useState } from "react";
import "../pages.css";

export default function Table({ editRow, columnArr, dataArr }) {
  const getNestedValue = (obj, path) => {
    return (
      path.split(".").reduce((acc, part) => acc && acc[part], obj) || "N/A"
    );
  };

  return (
    <section className={`h-full`}>
      <div
        className={`overflow-y-auto shadow-shadowTable max-h-[61vh] mt-4 mr-6 rounded-lg `}
      >
        <div>
          <table className={`border-collapse min-w-full`}>
            <thead
              className={`bg-red-600 p-4 m-10 text-left text-white top-0 z-0 sticky`}
            >
              <tr>
                {columnArr.map((item, index) => {
                  return (
                    <th key={index} className={`p-3`}>
                      {item.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {dataArr.map((item, index) => {
                return (
                  <tr
                    onClick={() => editRow(index)}
                    className={` bg-gray-100 hover:bg-red-700 hover:border-red-800 hover:text-white border-b-2 border-gray-200 transition-all duration-75 ease-in cursor-pointer`}
                    key={item.id}
                  >
                    {columnArr.map((header, i) => (
                      <td key={i} className={`p-4`}>
                        {/* Check for customRender in columnArr, else render the value normally */}
                        {header.customRender
                          ? header.customRender(item)
                          : header.row.includes(".")
                          ? getNestedValue(item, header.row)
                          : item[header.row] ?? "N/A"}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
